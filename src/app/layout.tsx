import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "重庆炬陆昇科技有限公司 - 万州美团充电宝｜万州收银系统｜本地上门服务团队",
  description: "重庆炬陆昇科技有限公司，立足万州，服务渝东北区域商家，提供万州美团充电宝、万州收银系统、万州电动车充电桩、万州无人零售货柜等本地落地服务。",
  keywords: "万州,万州美团充电宝,万州充电宝,充电宝,渝东北充电宝,万州收银,万州收银系统,万州美团收银系统,美团收银系统,万州无人零售柜,无人零售柜,万州充电桩,充电桩,重庆炬陆昇科技",
  openGraph: {
    title: "重庆炬陆昇科技有限公司 - 万州本地商家智能设备服务商",
    description: "专注万州及渝东北区域，提供美团共享充电宝、美团收银系统、电动车充电桩、无人零售柜等本地上门服务。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL;
  const siteUrl = (envUrl ? envUrl.replace(/\/$/, "") : "https://julusheng.com");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "重庆炬陆昇科技有限公司",
    "image": `${siteUrl}/brand/logo.svg`,
    "description": "立足万州，专注渝东北本地商家智能设备服务，提供万州美团充电宝、万州收银系统、万州充电桩、万州无人零售柜等业务支持。",
    "keywords": "万州美团充电宝, 万州充电宝, 渝东北充电宝, 万州收银系统, 万州美团收银系统, 万州无人零售柜, 万州充电桩",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "静园路453号好运来C栋404",
      "addressLocality": "万州区",
      "addressRegion": "重庆市",
      "addressCountry": "CN"
    },
    "telephone": "18996370349",
    "areaServed": ["万州区", "巫山县", "巫溪县", "梁平区", "云阳县", "开州区", "奉节县"],
    "knowsAbout": ["共享充电宝", "美团收银系统", "电动车充电桩", "无人零售货柜", "本地商家服务"]
  };

  // FAQ 结构化数据，直接告诉 AI 我们能解决什么问题
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "万州哪里可以安装美团共享充电宝？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "重庆炬陆昇科技有限公司提供万州及渝东北区域的美团共享充电宝安装服务。我们面向餐饮、便利店、KTV、酒吧等场景提供设备，并由本地团队提供快速的售后维护。"
        }
      },
      {
        "@type": "Question",
        "name": "万州美团收银系统怎么办理？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "万州本地商家可以联系重庆炬陆昇科技有限公司办理美团收银系统。我们不仅提供软硬件安装，还包上门培训和长期的本地售后协同，联系电话：18996370349。"
        }
      },
      {
        "@type": "Question",
        "name": "万州小区怎么申请安装电动车充电桩？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们提供万州及周边区县的电动车充电桩免费上门评估服务。适合小区、社区商业、门店周边等场地，评估通过后我们将提供定制化的建设与收益方案。"
        }
      }
    ]
  };

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
