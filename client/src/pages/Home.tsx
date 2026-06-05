import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Facebook, Music2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("rituals");

  const contactNumbers = [
    { label: "رقم الواتساب", value: "00905452810512", icon: Phone },
    { label: "رقم الاتصال", value: "00963980274768", icon: Phone },
  ];

  const socialLinks = [
    {
      name: "فيسبوك",
      url: "https://www.facebook.com/share/1EKUvtQ1cT/",
      icon: Facebook,
    },
    {
      name: "تيك توك",
      url: "https://www.tiktok.com/@amarbnyasir?_r=1&_t=ZS-96xYuhqBdnI",
      icon: Music2,
    },
  ];

  const rituals = [
    {
      title: "الإحرام",
      description:
        "البداية الصحيحة للحج والعمرة بالنية الخالصة والإحرام من الميقات المناسب",
    },
    {
      title: "الطواف",
      description:
        "الطواف حول الكعبة المشرفة بخشوع وتقوى، سبعة أشواط بكل هدوء واطمئنان",
    },
    {
      title: "السعي",
      description:
        "السعي بين الصفا والمروة سبع مرات، تذكراً لسعي أم إسماعيل رضي الله عنها",
    },
    {
      title: "التحلل",
      description:
        "التحلل من الإحرام بعد إتمام المناسك، والعودة إلى الحياة الطبيعية بقلب طاهر",
    },
  ];

  const services = [
    {
      title: "مناسك صحيحة",
      description:
        "تعليم شامل لجميع مناسك الحج والعمرة وفقاً لأحكام الشريعة الإسلامية الصحيحة",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663734427491/kNWeAaYUc6wbv4ttXXQTBm/rituals-NwzgRBNAdrcUoPoZWbJGPR.webp",
    },
    {
      title: "خدمات مريحة",
      description:
        "توفير جميع الخدمات اللازمة من الإقامة والنقل والإرشاد لضمان راحة الحجاج",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663734427491/kNWeAaYUc6wbv4ttXXQTBm/services-5VuvTTx552aaxSQ2QPawAV.webp",
    },
    {
      title: "رحلة آمنة",
      description:
        "رحلة آمنة وموثوقة مع فريق متخصص يسهر على سلامة وراحة جميع الحجاج",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663734427491/kNWeAaYUc6wbv4ttXXQTBm/pilgrims-PLwATYvhciKmVuzeyEjwfQ.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ع</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">عمار بن ياسر</h1>
              <p className="text-xs text-muted-foreground">للحج والعمرة</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              عن المجموعة
            </a>
            <a
              href="#rituals"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              المناسك
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              الخدمات
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              التواصل
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663734427491/kNWeAaYUc6wbv4ttXXQTBm/hero_bg-GAiKjzA36maiuzVegFZVya.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-right max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            رحلة الإيمان
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground mb-8">
            نسعى لتقديم أفضل الخدمات لضيوف الرحمن، برؤح من الإخلاص والأمانة
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-secondary"
          >
            ابدأ رحلتك الآن
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl transform -rotate-6"></div>
                <img
                  src="/manus-storage/ceo_profile_7a170ac9.jpg"
                  alt="د. عمار أحمد الجعلو - رئيس المجموعة"
                  className="relative w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                عن المجموعة
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                مجموعة عمار بن ياسر للحج والعمرة لخدمة حجاج بيت الله الحرام في جمهورية العربية السورية برئاسة الدكتور عمار أحمد الجعلو.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                نرحب بكم في رحلة إيمانية مباركة. فريقنا المتخصص يسعى لتقديم أفضل الخدمات لضيوف الرحمن، برؤح من الإخلاص والأمانة. ونسأل الله أن يجعل رحلتكم مباركة ومقبولة، وأن يحفظكم في كل خطوة من خطوات هذه الرحلة المقدسة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                أهلاً وسهلاً بك
              </h3>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                نرحب بكم في رحلة إيمانية مباركة. فريقنا المتخصص يسعى لتقديم أفضل
                الخدمات لضيوف الرحمن، برؤح من الإخلاص والأمانة.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                ونسأل الله أن يجعل رحلتكم مباركة ومقبولة، وأن يحفظكم في كل خطوة
                من خطوات هذه الرحلة المقدسة.
              </p>
            </div>
            <div>
              <img
                src="/manus-storage/team_welcome_bb702f21.jpg"
                alt="فريق عمار بن ياسر"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section id="rituals" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            المناسك الصحيحة
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rituals.map((ritual, idx) => (
              <Card
                key={idx}
                className="p-6 border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  {ritual.title}
                </h4>
                <p className="text-foreground leading-relaxed">
                  {ritual.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            خدماتنا المميزة
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            تواصل معنا
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact Numbers */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-6">أرقام التواصل</h4>
              {contactNumbers.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={idx}
                    href={`tel:${contact.value}`}
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition"
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-80">{contact.label}</p>
                      <p className="font-bold text-lg">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-6">تابعنا على السوشيال</h4>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition"
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">{social.name}</p>
                      <p className="text-sm opacity-80">اتبعنا للأخبار الجديدة</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Email Contact */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-6">البريد الإلكتروني</h4>
              <a
                href="mailto:ammarbiinyaser@gmail.com"
                className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition"
              >
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-80">أرسل لنا بريداً</p>
                  <p className="font-bold text-sm break-all">ammarbiinyaser@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground mb-2">
            © 2024 مجموعة عمار بن ياسر للحج والعمرة
          </p>
          <p className="text-muted-foreground text-sm">
            جميع الحقوق محفوظة | نسأل الله أن يقبل منا ومنكم
          </p>
        </div>
      </footer>
    </div>
  );
}
