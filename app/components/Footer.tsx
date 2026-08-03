import Link from "next/link";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white">
      <div className="container-x section-pad !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold">
                Core Tech <span className="text-brand">Partner</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-sm">
              Best IT solution agency for your business — web, mobile, FMCG
              systems, and cloud products built in Islamabad.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block hover:text-brand">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="block hover:text-brand">
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>Web Development</li>
              <li>App Development</li>
              <li>FMCG Systems</li>
              <li>UI / UX Design</li>
              <li>Cloud & Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li>Working Process</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li className="leading-relaxed pt-2 text-white/80">
                {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Core Tech Partner. All Rights
            Reserved.
          </p>
          <p>Created for digital excellence</p>
        </div>
      </div>
    </footer>
  );
}
