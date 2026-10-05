export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold text-blue-700">
          Xome Technologies
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Our application foundation is ready.
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-600">
          We are building a company website and client management
          application. This page confirms that the initial Next.js
          setup is working.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          M0 — Planning and setup
        </p>
      </section>
    </main>
  );
}