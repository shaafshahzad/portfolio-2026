export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1f2933]">
      <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-16">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-[#7c6f64]">
          Portfolio 2026
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-normal sm:text-7xl">
          Shaaf Shahzad
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5661] sm:text-xl">
          Computer Engineering student building software across web, AI, and
          systems. This repo is intentionally barebones while the updated
          portfolio direction takes shape.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-[#39424e]">
          <a
            className="border border-[#c8beb2] px-4 py-2 transition hover:border-[#1f2933]"
            href="mailto:shaaf.m.shahzad@gmail.com"
          >
            Email
          </a>
          <a
            className="border border-[#c8beb2] px-4 py-2 transition hover:border-[#1f2933]"
            href="https://github.com/shaafshahzad"
          >
            GitHub
          </a>
          <a
            className="border border-[#c8beb2] px-4 py-2 transition hover:border-[#1f2933]"
            href="https://www.linkedin.com/in/shaafshahzad/"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
