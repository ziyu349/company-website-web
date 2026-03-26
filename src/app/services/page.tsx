import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品与服务 - 美团充电宝/收银系统/充电桩 - 重庆炬陆昇科技",
  description: "了解我们的四大核心业务：美团共享充电宝、美团收银系统、电动车共享充电桩和无人零售货柜。万州本地团队，提供快速响应的售后服务。",
  keywords: "美团共享充电宝加盟,万州美团收银系统,万州电动车充电桩,无人零售货柜投放",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <h1 className="text-4xl font-bold mb-6 text-center">我们的产品与服务</h1>
      <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
        围绕本地商家和场地方的实际经营需求，我们持续提供以下业务支持，先评估后落地，做长期的本地维护。
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-10 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 flex flex-col">
          <h3 className="text-3xl font-semibold mb-6 text-primary">美团共享充电宝</h3>
          <p className="text-lg text-muted-foreground mb-8 flex-1 leading-relaxed">
            面向餐饮、便利店、KTV、酒吧、商超等场景，提供共享充电宝合作服务。我们不只是把机器放过去，更注重后续的经营与维护。
          </p>
          <ul className="space-y-4 text-base text-muted-foreground mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">现场机型匹配与点位建议</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">灵活的合作方式沟通</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">本地团队快速安装落地与售后维护</span>
            </li>
          </ul>
          <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary/10 px-6 py-2 text-base font-medium text-primary hover:bg-primary/20 transition-colors w-fit">
            咨询充电宝合作
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-10 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 flex flex-col">
          <h3 className="text-3xl font-semibold mb-6 text-primary">美团收银系统</h3>
          <p className="text-lg text-muted-foreground mb-8 flex-1 leading-relaxed">
            面向餐饮、零售、生鲜、美业、便利店等门店，帮助门店提升收银效率和经营管理效率。系统好用，更需要有人教、有人管。
          </p>
          <ul className="space-y-4 text-base text-muted-foreground mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">软硬件一体化安装部署</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">员工操作培训与日常运营协同</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">本地响应，快速解决突发售后问题</span>
            </li>
          </ul>
          <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary/10 px-6 py-2 text-base font-medium text-primary hover:bg-primary/20 transition-colors w-fit">
            咨询收银系统
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-10 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 flex flex-col">
          <h3 className="text-3xl font-semibold mb-6 text-primary">电动车共享充电桩</h3>
          <p className="text-lg text-muted-foreground mb-8 flex-1 leading-relaxed">
            面向小区、社区商业、门店周边等场地，解决周边居民及顾客的电动车安全充电需求。先判断场地条件，再推进合作。
          </p>
          <ul className="space-y-4 text-base text-muted-foreground mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">免费场地勘测与盈利评估</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">定制化的建设与收益方案</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">设备日常巡检与本地运维支持</span>
            </li>
          </ul>
          <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary/10 px-6 py-2 text-base font-medium text-primary hover:bg-primary/20 transition-colors w-fit">
            咨询充电桩建设
          </Link>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-10 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 flex flex-col">
          <h3 className="text-3xl font-semibold mb-6 text-primary">无人零售货柜</h3>
          <p className="text-lg text-muted-foreground mb-8 flex-1 leading-relaxed">
            面向学校、写字楼、社区、商场、候客区等点位，提供24小时无人值守的零售解决方案，帮助场地方将闲置空间变现。
          </p>
          <ul className="space-y-4 text-base text-muted-foreground mb-10">
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">人流量与消费潜力评估</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">本地选品建议与运营协同</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span> 
              <span className="leading-relaxed">后续运维思路与补货指导支持</span>
            </li>
          </ul>
          <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary/10 px-6 py-2 text-base font-medium text-primary hover:bg-primary/20 transition-colors w-fit">
            咨询零售柜点位
          </Link>
        </div>
      </div>
    </div>
  );
}
