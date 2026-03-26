import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <BrandLogo variant="mark" className="h-9 w-9 object-contain" />
            <span className="font-extrabold tracking-tight text-foreground leading-none whitespace-nowrap text-base sm:text-lg md:text-xl">
              重庆炬陆昇科技有限公司
            </span>
            <span className="sr-only">重庆炬陆昇科技有限公司</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
            首页
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            关于我们
          </Link>
          <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
            产品服务
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
            联系方式
          </Link>
        </nav>
        <div className="flex items-center">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            联系我们
          </Link>
        </div>
      </div>
    </header>
  );
}
