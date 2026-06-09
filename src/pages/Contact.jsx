import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            تواصل <span className="text-secondary-gold">معنا</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم الدعم الفني اللازم لمشروعاتكم.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-r-4 border-secondary-gold" data-aos="fade-left">
              <h2 className="text-2xl font-bold text-primary-dark mb-8">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 p-3 rounded-lg ml-4">
                    <Phone className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">اتصل بنا</div>
                    <div className="text-lg font-bold text-primary-dark" dir="ltr">+20 123 456 7890</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-blue/10 p-3 rounded-lg ml-4">
                    <Mail className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">البريد الإلكتروني</div>
                    <div className="text-lg font-bold text-primary-dark">info@msr-alkhaleej.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-blue/10 p-3 rounded-lg ml-4">
                    <MapPin className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">العنوان</div>
                    <div className="text-lg font-bold text-primary-dark">القاهرة، مدينة نصر، المنطقة السادسة</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-blue/10 p-3 rounded-lg ml-4">
                    <Clock className="h-6 w-6 text-primary-blue" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">ساعات العمل</div>
                    <div className="text-lg font-bold text-primary-dark">السبت - الخميس: 9ص - 6م</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Support */}
            <div className="bg-primary-blue text-white p-8 rounded-2xl shadow-lg" data-aos="fade-left" data-aos-delay="200">
              <MessageSquare className="h-10 w-10 text-secondary-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">دعم فني مباشر</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                هل لديك حالة طارئة؟ فريقنا متواجد على مدار الساعة لخدمة عملائنا الكرام.
              </p>
              <button className="w-full py-3 bg-secondary-gold text-primary-dark font-bold rounded-xl hover:bg-yellow-500 transition-colors">
                تواصل عبر واتساب
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="bg-white p-10 rounded-2xl shadow-lg h-full">
              <h2 className="text-3xl font-bold text-primary-dark mb-8">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">الاسم بالكامل</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/20 outline-none transition-all"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">الموضوع</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/20 outline-none transition-all"
                    placeholder="بخصوص ماذا تتواصل معنا؟"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/20 outline-none transition-all resize-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-4 bg-primary-dark text-white font-bold rounded-xl hover:bg-primary-blue transition-all group"
                >
                  إرسال الرسالة
                  <Send className="mr-3 h-5 w-5 transform group-hover:translate-y-[-2px] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60385038936!2d31.1884235!3d30.0594838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21be51%3A0x674de1930141ae!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2Kn!5e0!3m2!1sar!2seg!4v1625565000000!5m2!1sar!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
