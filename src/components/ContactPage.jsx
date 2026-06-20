import { Link } from "react-router-dom";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-8 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center underline mb-10">
          Contact Me
        </h1>

        <div className="card bg-base-200 shadow-xl p-8">

          <h2 className="text-3xl font-semibold mb-4">
            Get In Touch 👋
          </h2>

          <p className="text-lg leading-8">
            Hi! I'm <span className="font-bold">Krishna Gupta</span>, a
            Software Engineering student passionate about software development,
            problem solving, and building impactful products. I'd love to
            connect with fellow developers, recruiters, and tech enthusiasts.
          </p>

          <div className="divider"></div>

          <div className="space-y-6 text-lg">

            <div>
              <h3 className="text-xl font-semibold">📍 Location</h3>
              <p>Lucknow, Uttar Pradesh, India</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">📧 Email</h3>
              <p>krishna.kietian@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">💼 LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/krisshxna"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                linkedin.com/in/krisshxna
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">💻 GitHub</h3>
              <a
                href="https://https://github.com/Krishnagupta2327"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                github.com/Krishnagupta2327
              </a>
            </div>

          </div>

          <div className="divider"></div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Let's Build Something Amazing Together 🚀
            </h2>

            <p>
              Feel free to reach out for collaboration, opportunities, or just
              to say hello!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};