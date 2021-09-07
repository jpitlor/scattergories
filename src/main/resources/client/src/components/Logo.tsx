import logoImage from "../images/logo.png";

interface LogoProps {
  className?: string;
  includeImage?: boolean;
  includeText?: boolean;
  horizontal?: boolean;
}
export default function Logo({
  className = "",
  includeImage = true,
  includeText = true,
  horizontal = false,
}: LogoProps) {
  return (
    <div
      className={`
        mx-auto
        flex 
        items-center
        gap-2
        p-4
        mb-8
        ${horizontal ? "flex-row" : "flex-col"}
        ${className}
      `}
    >
      {includeImage && <img className="w-48" src={logoImage} alt="" />}
      {includeText && (
        <span className="text-3xl text-center text-neutral-20">
          SCATT<sub>E</sub>RGORI<sup>E</sup>S
        </span>
      )}
    </div>
  );
}
