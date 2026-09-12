// Core Tech Partner site file

type Props = {
  className?: string;
  markOnly?: boolean;
  inverted?: boolean;
};

export default function Logo({
  className = "",
  markOnly = false,
  inverted = false,
}: Props) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      role="img"
      aria-label="Core Tech Partner"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/coretech-logo.svg"
        alt="Core Tech Partner"
        width={382}
        height={100}
        className={`h-full w-auto max-h-full object-contain object-left ${
          inverted ? "brightness-0 invert" : ""
        } ${markOnly ? "max-w-[3rem]" : ""}`}
      />
    </span>
  );
}
