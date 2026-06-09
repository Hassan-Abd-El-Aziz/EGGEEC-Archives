import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { MapPin, Calendar, ArrowLeft, Search } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            مشاريعنا <span className="text-green-700">المتميزة</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفتخر بتنفيذ مجموعة من أكبر وأهم مشروعات المصاعد والسلالم الكهربائية
            في مصر، متبعين أعلى معايير الجودة العالمية.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن مشروع بالاسم أو الموقع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-12 py-4 rounded-xl border border-gray-300 focus:border-secondary-gold focus:ring-3 focus:ring-secondary-gold/20 transition-all bg-white pr-12"
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="flex justify-center mb-6 text-gray-300">
              <Search className="h-20 w-20" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              لا توجد مشاريع
            </h3>
            <p className="text-gray-600">
              لم يتم العثور على مشاريع تطابق بحثك الحالي
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === "منتهي"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {project.status}
                    </span>
                    <div className="text-shadow-primary-dark font-bold">
                      {project.progress}%
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary-dark mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 ml-2 text-primary-dark" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 ml-2 text-primary-dark" />
                      <span className="text-sm">{project.startDate}</span>
                    </div>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center justify-center w-full py-3 bg-primary-blue text-white rounded-xl font-bold hover:bg-primary-dark transition-colors group"
                  >
                    عرض تفاصيل المشروع
                    <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
