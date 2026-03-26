type Props = {
  variant?: "full" | "mark";
  className?: string;
  alt?: string;
};

export default function BrandLogo({ variant = "full", className, alt }: Props) {
  const base = variant === "mark" ? "mark" : "logo";
  return (
    <>
      <img
        src={`/brand/${base}-light.svg`}
        alt={alt ?? "重庆炬陆昇科技有限公司 - 万州美团充电宝/收银系统服务商"}
        className={`${className ?? ""} dark:hidden`.trim()}
        loading="eager"
      />
      <img
        src={`/brand/${base}-dark.svg`}
        alt={alt ?? "重庆炬陆昇科技有限公司 - 万州美团充电宝/收银系统服务商"}
        className={`${className ?? ""} hidden dark:block`.trim()}
        loading="eager"
      />
    </>
  );
}
