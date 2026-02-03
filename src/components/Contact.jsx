export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 md:py-32 bg-black text-white flex justify-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let us build something real.
        </h2>

        <p className="mt-8 text-lg md:text-xl text-gray-400">
          Open to full-stack and frontend internships or roles. If you need
          someone who can ship, I am ready to talk.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:jitin42013@gmail.com"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:opacity-80"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/jitin-kumar-chak-6b0a071ba/"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jitinkumarchak"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
