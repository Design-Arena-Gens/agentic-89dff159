import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Launch Your First Digital Product",
      description:
        "Learn the exact roadmap for planning, outlining, and packaging your ebook so it stands out in crowded marketplaces.",
    },
    {
      title: "Magnetic Writing Frameworks",
      description:
        "Craft irresistible chapters with story-driven templates, persuasive copy formulas, and proven engagement boosters.",
    },
    {
      title: "Built-In Marketing Playbook",
      description:
        "Get ready-to-use email scripts, social captions, and ad angles that turn browsers into buyers on autopilot.",
    },
  ];

  const testimonials = [
    {
      name: "Sierra Martin",
      role: "Course Creator",
      quote:
        "I launched my ebook in 14 days and generated $8k in pre-orders using the launch plan inside. This guide paid for itself instantly.",
    },
    {
      name: "Harvey Cole",
      role: "Freelance Designer",
      quote:
        "The storytelling frameworks unlocked a new voice for my brand. My first digital product finally feels premium.",
    },
  ];

  const faqs = [
    {
      question: "What format does the ebook come in?",
      answer:
        "You receive a beautifully designed, fully editable PDF plus editable Canva and Google Docs templates so you can customize quickly.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes. Try the playbook for 14 days. If it is not a fit, email support@digitalpages.co and we will refund you within 24 hours.",
    },
    {
      question: "Do I need an audience to benefit?",
      answer:
        "No. The launch section walks you through building momentum from scratch with lean lead magnet funnels and organic visibility tactics.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(67,56,202,0.35),transparent_60%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_left,_rgba(2,132,199,0.2),transparent_60%)] blur-3xl" />
      </div>

      <header className="relative border-b border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 shadow-lg shadow-cyan-500/10">
              <span className="text-lg font-semibold text-cyan-300">DP</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">
                Digital Pages
              </p>
              <p className="text-sm text-slate-400">
                The ultimate ebook launch playbook
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#chapters">
              Chapters
            </a>
            <a className="transition hover:text-white" href="#features">
              Benefits
            </a>
            <a className="transition hover:text-white" href="#author">
              Author
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
            <Link
              className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
              href="#purchase"
            >
              Buy the ebook
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-20 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              New Release · 3 Bonuses Included
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sell your ebook in days, not months.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              <strong className="text-white">
                Digital Pages
              </strong>{" "}
              is the battle-tested guide to outlining, writing, and launching a
              profitable ebook without guesswork. Build irresistible value,
              captivate readers, and convert your audience with proven systems.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#purchase"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Get Instant Access
              </Link>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold transition hover:border-white hover:text-white"
              >
                Download Chapter Sample
              </a>
            </div>
            <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">$39</p>
                <p className="mt-1 text-slate-400">Launch price</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">12K+</p>
                <p className="mt-1 text-slate-400">Readers reached</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">6</p>
                <p className="mt-1 text-slate-400">Plug-and-play funnels</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-8 shadow-2xl shadow-cyan-500/30">
            <div className="absolute -right-20 -top-36 h-56 w-56 rounded-full bg-cyan-500/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/40 blur-[100px]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Inside the ebook
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                The Digital Product Launch Blueprint
              </h2>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed text-slate-200">
                <li>
                  <span className="font-semibold text-white">
                    01 · Zero-to-One Positioning —
                  </span>{" "}
                  Nail your niche, promise, and hook with positioning canvases.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    02 · Story-Driven Writing —
                  </span>{" "}
                  Transform outlines into engaging chapters with hero journeys.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    03 · Conversion Design —
                  </span>{" "}
                  Craft a premium package with layout, typography, and cover
                  systems.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    04 · Evergreen Launch —
                  </span>{" "}
                  Automate sales with email sequences, launch flows, and bonus
                  stacks.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24"
        >
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Everything you need to write, design, and sell with confidence.
            </h2>
            <p className="text-lg text-slate-300">
              These three pillars compress months of research into a step-by-step
              system for shipping a profitable ebook in record time.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10"
              >
                <div className="h-12 w-12 rounded-xl border border-white/15 bg-white/10" />
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="preview"
          className="mx-auto w-full max-w-6xl gap-12 px-6 pb-24 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Sneak peek
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A sample chapter that turns readers into loyal customers.
            </h2>
            <p className="text-lg text-slate-300">
              Download an exclusive 14-page chapter showcasing the conversion
              frameworks you will use throughout the book. See how to
              transition from storytelling to calls-to-action that convert.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Framework breakdowns for hooks, value stacking, and reader
                momentum.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Copy-and-paste headline variations to keep each section fresh.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Real launch day checklist to ensure your sales page is ready.
              </li>
            </ul>
            <a
              href="https://digitalpages.superlink.co/sample"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-6 py-3 text-base font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-50"
            >
              Get the sample chapter
            </a>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/20 lg:mt-0">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-lg font-semibold text-white">
                  Chapter 5 · Magnetic CTA Architecture
                </h3>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-200">
                  Preview
                </span>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-200">
                <p>
                  We unlock the psychology behind high-performing calls-to-action.
                  You will learn how to move readers from curiosity to
                  commitment without sounding salesy.
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    CTA Blueprint
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-100">
                    <li>• Trigger emotion with a transformation hook.</li>
                    <li>• Anchor value using specific, quantifiable outcomes.</li>
                    <li>• Remove friction with urgency and risk-reversal.</li>
                  </ul>
                </div>
                <p>
                  By the end of the chapter you will plug these formulas into
                  your launch emails, landing page, and checkout flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="chapters"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-indigo-500/10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Table of contents
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              A tight five-part journey from idea to evergreen sales.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "01 · Blueprint Your Promise",
                  description:
                    "Define a standout promise, validate demand, and craft a positioning statement that attracts the right audience.",
                },
                {
                  title: "02 · Architect Engaging Chapters",
                  description:
                    "Turn research into a structured narrative arc with storytelling templates, pacing techniques, and editing systems.",
                },
                {
                  title: "03 · Design a Premium Package",
                  description:
                    "Choose typography, visual style, and cover design principles that signal authority across every asset.",
                },
                {
                  title: "04 · Launch with Momentum",
                  description:
                    "Plan your pre-launch runway, seed demand, and stack bonuses that make buying the obvious decision.",
                },
                {
                  title: "05 · Automate Evergreen Sales",
                  description:
                    "Deploy email sequences, lead magnets, and evergreen funnels that keep revenue flowing post-launch.",
                },
                {
                  title: "Bonus · Templates & Swipe Files",
                  description:
                    "Get 30+ scripts, design boards, and calculators to personalize the strategy in under an hour.",
                },
              ].map((chapter) => (
                <div
                  key={chapter.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {chapter.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="author"
          className="mx-auto w-full max-w-6xl gap-12 px-6 pb-24 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-10 shadow-xl shadow-cyan-500/20">
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="absolute -bottom-6 left-10 h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl" />
            <div className="relative space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Meet the author
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Alex Carter
              </h2>
              <p className="text-slate-300">
                Product strategist and writing coach who has helped 200+ creators
                generate $1.4M+ in digital product sales across Gumroad, Kajabi,
                and Shopify.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <p>• 8 years scaling digital offers and evergreen funnels.</p>
                <p>• Marketing coach featured in HubSpot, ConvertKit, and Fast Company.</p>
                <p>
                  • Creator of the Amplify Launch Lab community with 3,000+
                  members.
                </p>
              </div>
              <a
                href="https://digitalpages.superlink.co/consult"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-white hover:text-white"
              >
                Book a strategy session
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">
              What readers are saying
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-slate-100">{testimonial.quote}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {testimonial.name} · {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-24"
        >
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              FAQs
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Answers before you hit purchase.
            </h2>
            <p className="text-lg text-slate-300">
              If you have any other questions, reach out at{" "}
              <a className="underline decoration-cyan-400 underline-offset-4 hover:text-white" href="mailto:support@digitalpages.co">
                support@digitalpages.co
              </a>
              .
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="purchase"
          className="mx-auto w-full max-w-6xl px-6 pb-24"
        >
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 p-[1px]">
            <div className="rounded-[2.45rem] bg-slate-950 p-10 sm:p-16">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                    Secure checkout
                  </p>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Get lifetime access and bonuses today.
                  </h2>
                  <p className="text-lg text-slate-200">
                    Your purchase includes future updates, launch tracker
                    spreadsheets, and our private community of digital product
                    founders.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li>• 180-page ebook in PDF, EPUB, and Google Docs.</li>
                    <li>• Launch Strategy Dashboard and KPI calculator.</li>
                    <li>• Bonus: 3-part email sequence swipe file.</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-white/5 p-8 shadow-2xl shadow-black/30">
                  <div className="flex items-baseline gap-2 text-white">
                    <span className="text-4xl font-semibold">$39</span>
                    <span className="text-sm uppercase text-slate-300">
                      one-time
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-200">
                    Secure payment via Gumroad · Instant email delivery
                  </p>
                  <a
                    href="https://digitalpages.superlink.co/checkout"
                    className="mt-6 flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Complete Purchase
                  </a>
                  <p className="mt-4 text-xs text-slate-300">
                    Covered by our 14-day no-questions-asked refund policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Pages. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="mailto:support@digitalpages.co">
              Support
            </a>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#purchase">
              Buy now
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
