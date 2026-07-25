
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const ContactPage = () => {
  const theme = useSelector((store) => store.theme.mode);
  const isDark = theme === "dark";

  const cardClass = `rounded-3xl border p-8 md:p-10 backdrop-blur-xl transition-colors duration-300 ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-black/5 shadow-lg"}`;
  const bodyTextClass = `text-base leading-8 ${isDark ? "text-gray-400" : "text-gray-600"}`;

  const contactItems = [
    { icon: "📍", label: "Location", value: "Lucknow, Uttar Pradesh, India", link: null },
    { icon: "📧", label: "Email", value: "krishna.kietian@gmail.com", link: "mailto:krishna.kietian@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/krisshxna", link: "https://www.linkedin.com/in/krisshxna" },
    { icon: "💻", label: "GitHub", value: "github.com/Krishnagupta2327", link: "https://github.com/Krishnagupta2327" },
  ];

  return (
    <div className="px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        
        <div className="flex flex-col items-center text-center mb-4">
          <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
            Say Hello
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Contact <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h1>
        </div>

        
        <div className={cardClass}>
          <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Get In Touch 👋
          </h2>
          <p className={bodyTextClass}>
            Hi! I'm <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Krishna Gupta</span>, a
            Software Engineering student passionate about software development,
            problem solving, and building impactful products. I'd love to
            connect with fellow developers, recruiters, and tech enthusiasts.
          </p>
        </div>

       
        <div className="grid sm:grid-cols-2 gap-4">
          {contactItems.map((item) => {
            const content = (
              <div className={`h-full rounded-2xl border p-6 flex items-start gap-4 transition-all ${isDark ? "bg-white/3 border-white/10 hover:border-sky-500/30 hover:bg-white/5" : "bg-white border-black/5 hover:border-sky-300 shadow-sm"}`}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className={`text-xs font-semibold uppercase tracking-wider mb-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{item.label}</h3>
                  <p className={`text-sm font-medium ${item.link ? "text-sky-400" : (isDark ? "text-gray-200" : "text-gray-700")}`}>{item.value}</p>
                </div>
              </div>
            );
            return item.link ? (
              <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        
        <div className={`${cardClass} text-center relative overflow-hidden`}>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Let's Build Something Amazing Together 🚀
          </h2>
          <p className={bodyTextClass}>
            Feel free to reach out for collaboration, opportunities, or just
            to say hello!
          </p>
        </div>

      </div>
    </div>
  );
};