import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
    alert("شكراً للاشتراك في نشرتنا الإخبارية");
  };

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-secondary-gold ml-2" />
              <div>
                <h3 className="text-xl font-bold">مصر الخليج</h3>
                <p className="text-gray-300 text-sm">
                  للمصاعد والسلالم الكهربائية
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              شركة رائدة في مجال المصاعد والسلالم الكهربائية منذ عام 2018 نقدم
              حلولاً متكاملة بأعلى معايير الجودة والسلامة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-r-4 border-secondary-gold pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "عن الشركة", path: "/about" },
                { name: "المشاريع", path: "/projects" },
                { name: "المستندات", path: "/documents" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-secondary-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-r-4 border-secondary-gold pr-2">
              تواصل معنا
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-secondary-gold ml-2" />
                <span className="text-gray-300">01009039628</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-secondary-gold ml-2" />
                <span className="text-gray-300">info@msr-alkhaleej.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-secondary-gold ml-2" />
                <span className="text-gray-300">القاهرة، مصر</span>
              </div>
              <div className="flex gap-4 mb-4 md:mb-0">
                {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full hover:bg-secondary-gold hover:text-primary-dark transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          dir="ltr"
          className="border-t border-gray-800 pt-6 flex flex-col  justify-center items-center"
        >
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} مصر الخليج للمصاعد والسلالم الكهربائية.
            جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
