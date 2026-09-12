const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = "D:/Core Tech Partner/core_TechPartner";
const svg = fs.readFileSync(path.join(root, "public/coretech-logo.svg"), "utf8");
const m = svg.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (!m) {
  console.error("No embedded PNG");
  process.exit(1);
}

const pngBuf = Buffer.from(m[1], "base64");

async function makeSquareIcon(source, size, paddingRatio = 0.12) {
  const pad = Math.round(size * paddingRatio);
  const inner = size - pad * 2;
  const resized = await sharp(source)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: resized, left: pad, top: pad }])
    .png()
    .toBuffer();
}

async function main() {
  // Trim full logo, then take left circle mark (approx square of logo height)
  const trimmed = await sharp(pngBuf).trim({ threshold: 8 }).png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const markSide = Math.min(meta.height, meta.width);
  // Include a little extra width so the circle isn't clipped
  const extractW = Math.min(meta.width, Math.round(markSide * 1.05));

  const left = await sharp(trimmed)
    .extract({ left: 0, top: 0, width: extractW, height: markSide })
    .trim({ threshold: 8 })
    .png()
    .toBuffer();

  const appDir = path.join(root, "app");
  const publicDir = path.join(root, "public");

  const icon512 = await makeSquareIcon(left, 512, 0.1);
  const apple180 = await makeSquareIcon(left, 180, 0.1);
  const fav32 = await makeSquareIcon(left, 32, 0.08);
  const fav48 = await makeSquareIcon(left, 48, 0.08);

  fs.writeFileSync(path.join(appDir, "icon.png"), icon512);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), fav32);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), fav32);
  fs.writeFileSync(path.join(publicDir, "icon.png"), icon512);
  fs.writeFileSync(path.join(publicDir, "apple-icon.png"), apple180);
  fs.writeFileSync(path.join(publicDir, "logo-mark.png"), icon512);

  const b64 = icon512.toString("base64");
  fs.writeFileSync(
    path.join(appDir, "icon.svg"),
    `<!-- Core Tech Partner site file -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" role="img" aria-label="Core Tech Partner">
  <rect width="512" height="512" rx="96" fill="#ffffff"/>
  <image width="512" height="512" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${b64}"/>
</svg>
`
  );

  // cleanup temp previews
  for (const f of [
    "_icon-mark-preview.png",
    "_icon-full-preview.png",
    "_logo-full-tmp.png",
  ]) {
    const p = path.join(publicDir, f);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  console.log("Favicons updated from logo TP mark");
  console.log("sizes", {
    icon: icon512.length,
    apple: apple180.length,
    fav: fav32.length,
    fav48: fav48.length,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
