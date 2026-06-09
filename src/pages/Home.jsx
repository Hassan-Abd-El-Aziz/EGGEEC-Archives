import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, TrendingUp, Shield, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      featuresRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const features = [
    {
      icon: Shield,
      title: "جودة عالمية",
      desc: "نلتزم بأعلى معايير الجودة والسلامة",
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      desc: "تسليم المشاريع في الوقت المحدد",
    },
    {
      icon: TrendingUp,
      title: "خبرة أكثر من 6 سنوات",
      desc: "رائدة في مجال المصاعد في مصر",
    },
  ];

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center text-primary-dark mb-12"
            data-aos="fade-up"
          >
            لماذا تختار <span className="text-blue-700">مصر الخليج</span>؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-primary-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <feature.icon className="h-12 w-12 text-secondary-gold mb-4" />
                <h3 className="text-xl font-bold text-secondary-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">
            مستعدون لبدء مشروعك القادم؟
          </h2>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              to="/documents"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary-gold text-primary-dark font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              <FileText className="ml-2 h-5 w-5" />
              الملفات والمستندات
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-dark font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              عرض المشاريع
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
