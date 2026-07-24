import Link from "next/link";
import { notFound } from "next/navigation";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
};

const articles: Article[] = [
  {
    slug: "global-markets-react-tech-policy-shifts",
    category: "Top Story",
    title: "Global markets react as tech and policy shifts reshape digital business",
    excerpt:
      "A fast-moving mix of regulation, AI rollout, and investor sentiment is changing how companies build, ship, and scale products.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80",
    author: "M Rahman",
    authorRole: "Senior Reporter",
    publishedAt: "June 30, 2026",
    updatedAt: "June 30, 2026, 12:10 PM",
    readTime: "6 min read",
    content: [
      "A new wave of policy decisions, platform shifts, and investor pressure is forcing digital businesses to rethink how they prioritize growth. Teams that once optimized only for speed are now balancing compliance, resilience, and profitability.",
      "Technology leaders say the biggest change is not a single product trend but the convergence of several forces at once. Artificial intelligence is being pushed into core workflows, while governments and enterprise buyers are asking tougher questions about transparency, privacy, and reliability.",
      "That combination is affecting product roadmaps, hiring plans, and even infrastructure spending. Companies are making fewer speculative bets and putting more attention on systems that can directly support revenue, trust, and operational efficiency.",
      "For readers, the result is a business environment where the headline story is no longer just innovation. It is the quality of execution under pressure, and the organizations that adapt fastest are likely to define the next phase of the market.",
    ],
  },
  {
    slug: "ai-tools-core-infrastructure-product-teams",
    category: "Technology",
    title: "AI tools are becoming core infrastructure for modern product teams",
    excerpt:
      "Companies are moving beyond experiments and integrating AI into daily workflows across engineering, support, and content.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    author: "Editorial Team",
    authorRole: "Tech Desk",
    publishedAt: "June 30, 2026",
    updatedAt: "June 30, 2026, 10:45 AM",
    readTime: "4 min read",
    content: [
      "AI is increasingly being treated as infrastructure rather than as a side experiment. Product teams are using it across coding assistance, search, support, summarization, and internal documentation.",
      "The shift matters because infrastructure decisions tend to last longer than feature experiments. Once AI is embedded into core workflows, teams begin redesigning process, measurement, and staffing around it.",
      "The practical question is no longer whether to adopt AI, but where it creates dependable leverage. Leaders are focusing more on repeatable use cases than on headline demos.",
    ],
  },
];

const relatedNews = [
  {
    slug: "startups-focus-profitability-selective-funding",
    title: "Startups focus on profitability as funding becomes more selective",
    category: "Business",
  },
  {
    slug: "regional-alliances-trade-energy-logistics",
    title: "New regional alliances influence trade, energy, and logistics planning",
    category: "World",
  },
  {
    slug: "retail-investors-demand-simpler-tools",
    title: "Retail investors are demanding simpler tools and better market context",
    category: "Finance",
  },
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug == slug);

  if (!article) {
    notFound();
  }
// https://newsapi.org/v2/everything?q=all&apiKey=88b52bb5137a46a48e142b90d53c1f50
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm text-zinc-600 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-zinc-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-zinc-900">
            News
          </Link>
          <span>/</span>
          <span className="truncate text-zinc-900">{article.category}</span>
        </div>
      </section>

      <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <header className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-700">
                  {article.category}
                </span>
                <span className="text-zinc-500">{article.publishedAt}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-500">{article.readTime}</span>
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-zinc-600">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-5">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{article.author}</p>
                  <p className="text-sm text-zinc-500">{article.authorRole}</p>
                </div>
                <p className="text-sm text-zinc-500">Updated {article.updatedAt}</p>
              </div>
            </header>

            <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200">
              <img
                src={article.image}
                alt={article.title}
                className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[500px]"
              />
            </div>

            <div className="prose prose-zinc mt-10 max-w-none prose-p:text-zinc-700 prose-p:leading-8 prose-headings:text-zinc-950">
              {article.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-[17px] leading-8 text-zinc-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-xl font-bold text-zinc-950">Key points</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700">
                <li>Digital businesses are balancing growth with compliance and trust.</li>
                <li>AI adoption is moving from experimentation into core workflows.</li>
                <li>Operational efficiency is becoming as important as product velocity.</li>
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-zinc-950">Related News</h2>
                <div className="mt-4 space-y-4">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="block rounded-xl border border-zinc-100 p-4 transition hover:border-zinc-300 hover:bg-zinc-50"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold leading-6 text-zinc-900">
                        {item.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  Newsletter
                </p>
                <h2 className="mt-2 text-2xl font-bold">Get the day&apos;s sharpest headlines.</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Join readers who want concise news without the noise.
                </p>
                <button className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
                  Subscribe now
                </button>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-zinc-950">Share</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
                    Facebook
                  </button>
                  <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
                    X
                  </button>
                  <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
                    Copy link
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}