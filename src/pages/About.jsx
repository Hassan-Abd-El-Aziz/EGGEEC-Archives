import React from "react";
import {
  CheckCircle2,
  Target,
  History,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "الجودة والسلامة",
      desc: "نضع سلامة المستخدمين في مقدمة أولوياتنا من خلال اتباع أدق المعايير العالمية.",
    },
    {
      icon: Target,
      title: "الابتكار",
      desc: "نواكب أحدث التقنيات في عالم المصاعد والسلالم الكهربائية لتوفير حلول ذكية.",
    },
    {
      icon: Users,
      title: "خدمة العملاء",
      desc: "نلتزم بتقديم دعم فني متميز وصيانة دورية لضمان استمرارية كفاءة منتجاتنا.",
    },
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-gold rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            عن <span className="text-secondary-gold">مصر الخليج</span>
          </h1>
          <p
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            أكثر من 6 سنوات من الخبرة والتميز في توريد وتركيب وصيانة المصاعد
            والسلالم الكهربائية في السوق المصري.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                قصة نجاحنا
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg text-justify">
                <p>
                  تأسست شركة مصر الخليج (EGGEEC) برؤية واضحة لتغيير مفهوم التنقل
                  الرأسي في مصر. على مدار أكثر من 6 سنوات نجحنا في بناء اسم
                  موثوق يجمع بين الخبرة المحلية والتقنيات العالمية.
                </p>
                <p>
                  بدأنا بمجموعة صغيرة من المهندسين المتميزين، واليوم نفخر
                  بامتلاكنا لواحدة من أكبر فرق الدعم الفني والتركيبات في مصر، مع
                  سجل حافل بالمشاريع القومية والتجارية الكبرى.
                </p>
              </div>
            </div>
            <div
              className="md:w-1/2 grid grid-cols-2 gap-4"
              data-aos="fade-right"
            >
              <div className="bg-primary-dark/80 p-8 rounded-2xl text-center shadow-sm">
                <History className="h-10 w-10 text-secondary-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-100">6+</div>
                <div className="text-secondary-gold">عاماً من الخبرة</div>
              </div>
              <div className="bg-primary-dark/40 border-primary-dark border-1 p-8 rounded-2xl text-center shadow-sm">
                <Award className="h-10 w-10 text-secondary-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-dark">50+</div>
                <div className="text-secondary-gold">مشروع منفذ</div>
              </div>
              <div className="bg-primary-dark/40 border-primary-dark border-1 p-8 rounded-2xl text-center shadow-sm">
                <Users className="h-10 w-10 text-secondary-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-dark">100+</div>
                <div className="text-secondary-gold">مهندس وفني</div>
              </div>
              <div className="bg-primary-dark/80 p-8 rounded-2xl text-center shadow-sm">
                <CheckCircle2 className="h-10 w-10 text-secondary-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary-dark">24/7</div>
                <div className="text-secondary-gold">دعم فني</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-primary-dark mb-16"
            data-aos="fade-up"
          >
            قيمنا الجوهرية
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-primary-dark"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <val.icon className="h-12 w-12 text-secondary-gold mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
