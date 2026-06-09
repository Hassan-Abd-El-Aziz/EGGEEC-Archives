import React from "react";
import { Mail, Phone, Briefcase, Award, Linkedin } from "lucide-react";
import { managementData } from "../data/managementData";

const Management = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            فريق <span className="text-primary-dark">الإدارة</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نخبة من الخبراء والمتخصصين في مجال المصاعد والسلالم الكهربائية
          </p>
        </div>

        {/* Management Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementData.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 card-hover"
              data-aos="fade-up"
              data-aos-delay={member.id * 100}
            >
              {/* Card Top */}
              <div className="relative h-48 bg-gradient-to-r from-primary-light via-primary-dark to-primary-light">
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <div className="text-sm opacity-90">{member.department}</div>
                  <div className="text-xl font-bold mt-1">
                    {member.position}
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-secondary-gold text-primary-dark px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Award className="h-3 w-3 ml-1" />
                  {member.experience}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-secondary-gold transition-colors">
                  {member.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 text-primary-blue ml-2 flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-primary-blue transition-colors truncate text-sm"
                    >
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 text-primary-blue ml-2 flex-shrink-0" />
                    <a
                      href={`tel:${member.phone}`}
                      className="hover:text-primary-blue transition-colors text-sm"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-primary-dark text-white font-medium rounded-lg hover:bg-primary-blue transition-colors flex items-center justify-center">
                    <Briefcase className="h-4 w-4 ml-2" />
                    الملف الشخصي
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:border-secondary-gold hover:bg-secondary-gold/10 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-600 mb-6">تريد التواصل مع فريق الإدارة؟</p>
          <a
            href="mailto:management@msr-alkhaleej.com"
            className="inline-block px-8 py-3 bg-secondary-gold text-primary-dark font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            تواصل مع الإدارة
          </a>
        </div>
      </div>
    </div>
  );
};

export default Management;
