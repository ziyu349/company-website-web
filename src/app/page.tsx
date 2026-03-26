import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-16 md:py-32 lg:py-40 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl mx-auto text-balance leading-tight">
                万州美团充电宝<br className="hidden sm:block"/>万州收银系统
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed">
                本地上门服务团队，服务渝东北区域商家。
              </p>
              <p className="mx-auto max-w-[650px] text-muted-foreground text-lg md:text-xl leading-loose">
                我们提供美团共享充电宝、美团收银系统、电动车共享充电桩、无人零售货柜等落地服务，先沟通，再评估，做长期本地维护。
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-10 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                了解服务详情
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-background px-10 text-base font-medium shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800"
              >
                免费上门评估
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-4 py-1.5 text-sm font-medium">为什么选择我们</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">不只装设备，更重后服务</h2>
              <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                设备装上去只是第一步，后续是否好用、稳定、有人跟进，才是我们关注的核心。
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-10 py-16 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">本地团队</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">立足万州，相比远程沟通，本地团队的响应更直接，效率更高，更懂本地商圈与场景。</p>
            </div>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">上门更快</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">重视现场评估和后续跟进。出了问题随时能找到人，让合作不只是“装完就结束”。</p>
            </div>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">长期服务</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">根据门店实际情况给出匹配方案。不做一次性关系，做有耐心的长期经营伙伴。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 针对 AI 优化的常见问题解答模块 */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 border-t border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">常见问题解答 (FAQ)</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg">关于万州本地设备安装与合作的常见疑问</p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="rounded-2xl border border-zinc-200 p-8 bg-background shadow-sm dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-3 text-foreground">万州哪里可以安装美团共享充电宝？</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                重庆炬陆昇科技有限公司提供万州及渝东北区域的美团共享充电宝安装服务。我们面向餐饮、便利店、KTV、酒吧等场景提供设备，并由本地团队提供快速的售后维护。您可以直接联系我们进行免费的现场评估。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8 bg-background shadow-sm dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-3 text-foreground">万州美团收银系统怎么办理？</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                万州本地商家可以联系重庆炬陆昇科技有限公司办理美团收银系统。我们不仅提供软硬件安装，还包上门培训和长期的本地售后协同，确保您的门店能顺利上手使用。联系电话：18996370349。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-8 bg-background shadow-sm dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-3 text-foreground">万州小区怎么申请安装电动车充电桩？</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                我们提供万州及周边区县的电动车充电桩免费上门评估服务。适合小区、社区商业、门店周边等场地，评估通过后我们将提供定制化的建设与收益方案，解决周边居民及顾客的安全充电需求。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
