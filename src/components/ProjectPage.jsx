import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Home,
  BarChart3,
  ExternalLink,
  Download,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { projectsData } from "../data/projectsData";
import { documentsData } from "../data/documentsData";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const handleDownload = (url, title) => {
    // In a real app, this would trigger the actual download
    window.open(url, "_blank");
    console.log(`Downloading: ${title}`);
  };
  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id));
    setProject(foundProject);

    // Animation on load
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "all 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 200);
    });
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl text-gray-600">المشروع غير موجود</h2>
        <Link
          to="/"
          className="text-primary-blue hover:underline mt-4 inline-block"
        >
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  const chartData = project.progressData || [];

  const getStatusIcon = () => {
    if (project.status === "منتهي") {
      return <CheckCircle className="h-6 w-6 text-blue-500" />;
    } else if (project.status.includes("جاري")) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    } else {
      return <AlertCircle className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      {/* Breadcrumb */}
      <nav className="flex items-center text-gray-600 mb-8" dir="rtl">
        <Link to="/" className="hover:text-primary-blue">
          <Home className="h-4 w-4" />
        </Link>
        <ArrowRight className="h-4 w-4 mx-2 rotate-180" />
        <span className="text-primary-dark font-semibold">{project.name}</span>
      </nav>

      <div className="animate-on-load">
        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-primary-dark mb-2">
                {project.name}
              </h1>
              <p className="text-gray-600 text-lg">{project.description}</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 bg-gray-50 px-4 py-2 rounded-lg">
              {getStatusIcon()}
              <span className="mr-2 font-bold text-lg">{project.status}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleDownload(project.url, project.title)}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-blue transition-colors group"
            >
              <ExternalLink className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
              <span>فتح ملفات المشروع في OneDrive</span>
            </button>

            <button
              onClick={() => handleDownload(project.url, project.title)}
              className="p-3 border border-gray-300 rounded-lg hover:border-secondary-gold hover:bg-secondary-gold/10 transition-colors group"
              aria-label="تحميل الملف"
            >
              <Download className="h-5 w-5 text-gray-600 group-hover:text-secondary-gold" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-red-800 ml-2" />
              <div>
                <div className="text-gray-500 text-sm">الموقع</div>
                <div className="font-semibold">{project.location}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 ml-2" />
              <div>
                <div className="text-gray-500 text-sm">تاريخ البدء</div>
                <div className="font-semibold">{project.startDate}</div>
              </div>
            </div>
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 text-primary-blue ml-2" />
              <div>
                <div className="text-gray-500 text-sm">متوسط التقدم</div>
                <div className="font-semibold">{project.progress}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        {/* Progress Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-on-load">
          <h2 className="text-2xl font-bold text-primary-dark mb-8 flex items-center">
            <BarChart3 className="ml-2 h-6 w-6" />
            الموقف التنفيذي للمشروع
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  innerRadius={60} // لو عايزه Doughnut شيله لو Pie عادي
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color || "#3B82F6"}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value) => [`${value}%`, "النسبة"]}
                  contentStyle={{ textAlign: "right" }}
                  labelStyle={{ textAlign: "right" }}
                />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Summary Cards */}
          <div
            className={`grid grid-cols-2 md:grid-cols-${Math.min(
              chartData.length,
              4
            )} gap-4 mt-8`}
          >
            {chartData.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: item.color || "#3B82F6" }}
                >
                  {item.value}%
                </div>
                <div className="text-gray-600 text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-load">
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            تفاصيل المشروع
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(project.details).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-gray-500 text-sm capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
                <div className="font-semibold text-lg mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
