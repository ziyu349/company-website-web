import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们_重庆炬陆昇科技有限公司_万州本地商家智能设备服务商",
  description: "重庆炬陆昇科技有限公司，立足万州，服务渝东北区域商家，提供万州美团共享充电宝、万州美团收银系统、电动车共享充电桩、无人零售货柜等本地落地服务。",
  keywords: "重庆炬陆昇科技有限公司,万州美团充电宝公司,万州收银系统服务商,万州本地服务团队,渝东北智能设备",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">关于我们</h1>
      <div className="space-y-12">
        <section className="space-y-6">
          <p className="text-lg text-muted-foreground leading-loose">
            重庆炬陆昇科技有限公司，立足重庆万州，专注本地商家智能设备服务，主要提供美团共享充电宝、美团收银系统、电动车共享充电桩、无人零售货柜等业务支持。
          </p>
          <p className="text-lg text-muted-foreground leading-loose">
            我们服务的不是抽象市场，而是一个个真实的本地门店和场地。对商家来说，设备能不能装上去只是第一步，后续是否好用、稳定、有人跟进，才决定这件事能不能长期做下去。也正因为这样，我们更强调本地沟通、本地响应、本地维护、长期服务。
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b pb-4">我们在做什么</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">围绕本地商家和场地方的实际经营需求，我们持续提供以下服务：</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-8 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-primary">美团共享充电宝</h3>
              <p className="text-base text-muted-foreground leading-relaxed">面向餐饮、便利店、KTV、酒吧、商超等场景，提供共享充电宝合作服务，支持机型匹配、合作方式沟通、安装落地和后续维护。</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-8 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-primary">美团收银系统</h3>
              <p className="text-base text-muted-foreground leading-relaxed">面向餐饮、零售、生鲜、美业、便利店等门店，提供收银系统安装、培训、运营协同与本地售后服务，帮助门店提升收银效率和经营管理效率。</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-8 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-primary">电动车共享充电桩</h3>
              <p className="text-base text-muted-foreground leading-relaxed">面向小区、社区商业、门店周边等场地，提供电动车共享充电桩评估、方案沟通与本地服务支持，先判断是否适合，再推进合作。</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-8 bg-background shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-primary">无人零售货柜</h3>
              <p className="text-base text-muted-foreground leading-relaxed">面向学校、写字楼、社区、商场、候客区等点位，提供无人零售货柜点位评估、本地协同和后续运维思路支持。</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b pb-4">为什么选择我们</h2>
          <div className="space-y-8">
            <div className="pl-4 border-l-4 border-primary/40">
              <h3 className="text-xl font-semibold text-foreground mb-2">本地团队，更懂本地场景</h3>
              <p className="text-base text-muted-foreground leading-relaxed">我们立足万州，更了解本地商圈、门店类型、消费场景和商家实际需求。相比远程沟通，本地团队的响应更直接，效率更高。</p>
            </div>
            <div className="pl-4 border-l-4 border-primary/40">
              <h3 className="text-xl font-semibold text-foreground mb-2">上门更快，沟通更省心</h3>
              <p className="text-base text-muted-foreground leading-relaxed">很多商家最怕的不是设备本身，而是出了问题找不到人。我们更重视上门沟通、现场评估和后续跟进，让合作不只是“装完就结束”。</p>
            </div>
            <div className="pl-4 border-l-4 border-primary/40">
              <h3 className="text-xl font-semibold text-foreground mb-2">合作方式灵活</h3>
              <p className="text-base text-muted-foreground leading-relaxed">不同门店、不同场地、不同经营阶段，需求都不一样。我们更强调根据实际情况给出匹配方案，而不是一套模板打天下。</p>
            </div>
            <div className="pl-4 border-l-4 border-primary/40">
              <h3 className="text-xl font-semibold text-foreground mb-2">长期服务，不做一次性关系</h3>
              <p className="text-base text-muted-foreground leading-relaxed">安装只是开始，后续维护、培训、使用指导和持续服务，才是真正影响商家体验的部分。我们的核心理念一直很明确：长期服务，有耐心。</p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold border-b pb-4">服务区域</h2>
            <p className="text-base text-muted-foreground leading-relaxed">我们聚焦渝东北区域，本地服务链路更短，沟通更快，落地更稳。目前重点服务以下区域：</p>
            <div className="flex flex-wrap gap-3">
              {["万州", "巫山", "巫溪", "梁平", "云阳", "开州", "奉节"].map((area) => (
                <span key={area} className="inline-flex items-center rounded-lg bg-muted px-4 py-2 text-base font-medium">
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold border-b pb-4">我们服务的对象</h2>
            <p className="text-base text-muted-foreground leading-relaxed">我们的服务更适合以下类型客户：</p>
            <ul className="space-y-3 text-base text-muted-foreground list-disc list-inside ml-2 marker:text-primary">
              <li>餐饮门店（火锅店、快餐店、小吃店）</li>
              <li>便利店、商超、零售店</li>
              <li>KTV、酒吧、棋牌室等娱乐场景</li>
              <li>生鲜店、烟酒店、社区门店</li>
              <li>美业、健身、生活服务类门店</li>
              <li>写字楼、学校、社区、候客区等场地</li>
            </ul>
          </section>
        </div>

        <section className="space-y-6 bg-muted/30 p-8 md:p-10 rounded-2xl border border-zinc-100 dark:border-zinc-800">
          <h2 className="text-3xl font-semibold mb-6">我们的服务理念</h2>
          <p className="text-lg text-muted-foreground leading-loose mb-6">
            我们始终认为，设备类服务不是简单“卖一个产品”，而是要结合门店或场地的真实经营情况，提供更适合的落地方案和长期支持。
          </p>
          <p className="text-foreground text-lg font-medium mb-4">所以我们更看重的是：</p>
          <ul className="space-y-4 text-lg text-muted-foreground list-disc list-inside ml-2 marker:text-primary">
            <li>先沟通，再判断是否适合</li>
            <li>先评估，再推进合作</li>
            <li>不夸大，不乱承诺</li>
            <li>做本地长期服务，而不是短期成交</li>
          </ul>
        </section>

        <section className="space-y-8 pt-8">
          <h2 className="text-3xl font-semibold border-b pb-4">联系我们</h2>
          <p className="text-lg text-muted-foreground leading-loose">
            如果你是万州或渝东北区域的门店商家、场地方，想咨询：美团共享充电宝、美团收银系统、电动车共享充电桩、无人零售货柜，欢迎直接联系我们，先沟通，再判断是否适合推进。
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 space-y-4">
            <p className="text-foreground text-lg flex items-start gap-4"><span className="font-semibold w-24 shrink-0">公司名称</span>重庆炬陆昇科技有限公司</p>
            <p className="text-foreground text-lg flex items-start gap-4"><span className="font-semibold w-24 shrink-0">联系电话</span>18996370349</p>
            <p className="text-foreground text-lg flex items-start gap-4"><span className="font-semibold w-24 shrink-0">微信号</span>17612876156</p>
            <p className="text-foreground text-lg flex items-start gap-4"><span className="font-semibold w-24 shrink-0">公司地址</span>重庆市万州区静园路453号好运来C栋404</p>
          </div>
        </section>

      </div>
    </div>
  );
}
