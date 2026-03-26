import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 - 万州本地设备服务商 - 重庆炬陆昇科技",
  description: "联系重庆炬陆昇科技，咨询美团充电宝、收银系统、充电桩等业务合作。电话：18996370349，微信：17612876156，地址：万州区静园路453号好运来C栋404。",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">联系我们</h1>
      <p className="text-center text-muted-foreground mb-12">
        如果你是万州或渝东北区域的门店商家、场地方，想咨询：美团共享充电宝、美团收银系统、电动车共享充电桩、无人零售货柜，欢迎直接联系我们，先沟通，再判断是否适合推进。
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">公司地址</h3>
            <p className="text-muted-foreground">
              重庆市万州区静园路453号好运来C栋404
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">联系电话</h3>
            <p className="text-muted-foreground">18996370349</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">微信号</h3>
            <p className="text-muted-foreground">17612876156</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">商务合作邮箱</h3>
            <p className="text-muted-foreground">17612876156@163.com</p>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg border">
          <h3 className="font-semibold text-xl mb-4">在线留言</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                您的姓名
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-zinc-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-zinc-800"
                placeholder="请输入姓名"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                联系电话
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-md border border-zinc-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-zinc-800"
                placeholder="请输入联系电话"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                留言内容
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-zinc-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-zinc-800"
                placeholder="请简要描述您的需求或场地情况"
              ></textarea>
            </div>
            <button type="button" className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              提交留言
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
