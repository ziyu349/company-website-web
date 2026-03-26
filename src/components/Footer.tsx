import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* SEO 友好的本地服务关键词标签云 */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-3">本地服务覆盖：</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="bg-muted px-2 py-1 rounded">万州美团充电宝</span>
            <span className="bg-muted px-2 py-1 rounded">万州充电宝</span>
            <span className="bg-muted px-2 py-1 rounded">渝东北充电宝</span>
            <span className="bg-muted px-2 py-1 rounded">万州收银系统</span>
            <span className="bg-muted px-2 py-1 rounded">万州美团收银系统</span>
            <span className="bg-muted px-2 py-1 rounded">美团收银系统</span>
            <span className="bg-muted px-2 py-1 rounded">万州无人零售柜</span>
            <span className="bg-muted px-2 py-1 rounded">万州充电桩</span>
            <span className="bg-muted px-2 py-1 rounded">充电桩</span>
            <span className="bg-muted px-2 py-1 rounded">无人零售柜</span>
            <span className="bg-muted px-2 py-1 rounded">充电宝</span>
            <span className="bg-muted px-2 py-1 rounded">万州收银</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <BrandLogo variant="mark" className="h-6 w-6 object-contain" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} 重庆炬陆昇科技有限公司. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              关于我们
            </Link>
            <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              产品服务
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              联系方式
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
