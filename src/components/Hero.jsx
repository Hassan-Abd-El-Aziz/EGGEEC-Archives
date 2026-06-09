import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // GSAP Animation Sequence
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .fromTo(
        featuresRef.current.children,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.2"
      );

    // Background animation
    gsap.to(heroRef.current, {
      backgroundPosition: "0% 50%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-10 md:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-blue to-primary-dark"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(10,26,58,0.95) 0%, rgba(30,58,138,0.85) 50%, rgba(10,26,58,0.95) 50%), url("https://i.ibb.co/Q76wNPhQ/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-secondary-gold/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <div ref={titleRef} className="mb-8">
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Sparkles className="h-5 w-5 text-secondary-gold ml-2" />
              <span className="text-secondary-light font-semibold">
                الرائدة منذ 2018
              </span>
            </div>

            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-20">
              <span className="block">شركة مصر الخليج</span>
              <span className="block text-secondary-gold mt-2">
                للمصاعد والسلالم الكهربائية
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-8">
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              نقدم حلولاً هندسية متكاملة في مجال المصاعد والسلالم الكهربائية
              <span className="text-secondary-gold font-bold">
                {" "}
                بخبرة كبيرة تمتد لأكثر من 6 سنوات
              </span>
              ، مع التركيز على الجودة والأمان والابتكار
            </p>
          </div>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-secondary-gold text-primary-dark font-bold rounded-xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
            >
              <span>عرض مشاريعنا</span>
              <ArrowRight className="mr-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-900/50 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <Play className="ml-3 h-5 w-5" />
              <span>طلب استشارة مجانية</span>
            </Link>
          </div>

          {/* Features */}
          <div
            ref={featuresRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-3"
          >
            {[
              { text: "جودة أوروبية", highlight: "100%" },
              { text: "تسليم في الوقت", highlight: "98%" },
              { text: "ضمان", highlight: "5 سنوات" },
              { text: "دعم فني", highlight: "24/7" },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-xl backdrop-blur-sm bg-secondary-gold/80 hover:bg-yellow-500"
              >
                <div className="text-2xl font-bold text-blue-800 mb-1">
                  {feature.highlight}
                </div>
                <div className="text-gray-800 text-sm">{feature.text}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            aria-label="انتقل للأسفل"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
