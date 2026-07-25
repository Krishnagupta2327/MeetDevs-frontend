
import { useSelector } from "react-redux";

export const AboutUsPage = () => {
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";

    const cardClass = `rounded-3xl border p-8 md:p-10 backdrop-blur-xl transition-colors duration-300 ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-black/5 shadow-lg"}`;
    const sectionTitleClass = `text-2xl md:text-3xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`;
    const bodyTextClass = `text-base leading-8 ${isDark ? "text-gray-400" : "text-gray-600"}`;

    const techStack = [
        "React", "Redux Toolkit", "Tailwind CSS", "DaisyUI",
        "Node.js", "Express.js", "MongoDB", "JWT Authentication"
    ];

    return (
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-4">
            <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
              The Story
            </span>
            <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              About <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">MeetDevs</span>
            </h1>
          </div>

          {/* Welcome */}
          <div className={cardClass}>
            <h2 className={sectionTitleClass}>
              Welcome to MeetDevs 🚀
            </h2>
            <p className={bodyTextClass}>
              MeetDevs is a developer networking platform created to help
              developers connect, collaborate, and grow together. Whether
              you're a student, a passionate programmer, or an experienced
              software engineer, MeetDevs provides a place to build meaningful
              professional connections and discover like-minded people.
            </p>
          </div>

          {/* Mission */}
          <div className={cardClass}>
            <h2 className={sectionTitleClass}>
              Our Mission
            </h2>
            <p className={bodyTextClass}>
              We believe that great products are built by great communities.
              MeetDevs aims to bring developers together, encourage collaboration,
              and create opportunities for learning and innovation.
            </p>
          </div>

          {/* Features */}
          <div className={cardClass}>
            <h2 className={sectionTitleClass}>
              Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {[
                "Create and customize your developer profile.",
                "Connect with developers from different domains.",
                "Manage connection requests seamlessly.",
                "Build your professional network.",
                "Collaborate and grow with the community.",
              ].map((feature, idx) => (
                <div key={idx} className={`flex items-start gap-3 p-4 rounded-xl border ${isDark ? "bg-white/2 border-white/5" : "bg-black/2 border-black/5"}`}>
                  <span className="text-sky-400 mt-0.5">✓</span>
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creator spotlight */}
          <div className={`${cardClass} relative overflow-hidden`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className={sectionTitleClass}>
              About the Creator
            </h2>
            <p className={bodyTextClass}>
              Hi! 👋 I'm <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Krishna Gupta</span>, a
              Software Engineering student from Lucknow, India. I am passionate
              about software development, problem solving, and building products
              that make a difference. MeetDevs is one of my personal projects,
              built with the vision of helping developers connect and create
              amazing things together.
            </p>
          </div>

          
         <div className={cardClass}>
            <h2 className={sectionTitleClass}>
              Tech Stack
            </h2>

            <div className="mt-4">
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Frontend</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {["React", "Redux Toolkit", "Tailwind CSS", "DaisyUI"].map((tech) => (
                  <span key={tech} className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${isDark ? "bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20" : "bg-sky-50 text-sky-600 border-sky-200 hover:bg-sky-100"}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Backend</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Cron Jobs"].map((tech) => (
                  <span key={tech} className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${isDark ? "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20" : "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Infrastructure & Integrations</h3>
              <div className="flex flex-wrap gap-3">
                {["AWS EC2", "AWS SES", "Razorpay"].map((tech) => (
                  <span key={tech} className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${isDark ? "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20" : "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100"}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className={`${cardClass} text-center`}>
            <h2 className={`text-2xl font-bold mb-3 bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent`}>
              Connect. Collaborate. Grow.
            </h2>
            <p className={bodyTextClass}>
              Built with ❤️ by <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Krishna Gupta</span>.
            </p>
          </div>

        </div>
      </div>
    );
  };