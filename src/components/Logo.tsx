type LogoProps = { couleur?: "noir" | "blanc"; className?: string };

// Symbole en arche de la charte NomadAir + nom en Outfit.
const Logo = ({ couleur = "noir", className = "" }: LogoProps) => {
  const fill = couleur === "blanc" ? "#FFFFFF" : "#111111";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 80 96" className="h-7 w-auto" aria-hidden="true">
        <path
          d="M 0 96 L 0 40 A 40 40 0 0 1 80 40 L 80 96 L 64 96 L 64 40 A 24 24 0 0 0 16 40 L 16 96 Z"
          fill={fill}
        />
        <circle cx="40" cy="57.6" r="7.2" fill={fill} />
      </svg>
      <span
        className={`text-[1.4rem] font-medium tracking-[-0.02em] ${couleur === "blanc" ? "text-white" : "text-nomad-black"}`}
      >
        NomadAir
      </span>
    </span>
  );
};

export default Logo;
