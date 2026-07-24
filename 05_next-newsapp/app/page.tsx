import Link from "next/link";

type Article = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
};

const featuredArticle: Article = {
  id: 1,
  category: "Top Story",
  title: "Global markets react as tech and policy shifts reshape digital business",
  excerpt:
    "A fast-moving mix of regulation, AI rollout, and investor sentiment is changing how companies build, ship, and scale products.",
  image:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
  author: "M Rahman Desk",
  date: "June 30, 2026",
  readTime: "6 min read",
};

const latestNews: Article[] = [
  {
    id: 2,
    category: "Technology",
    title: "AI tools are becoming core infrastructure for modern product teams",
    excerpt:
      "Companies are moving beyond experiments and integrating AI into daily workflows across engineering, support, and content.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    author: "Editorial Team",
    date: "June 30, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Business",
    title: "Startups focus on profitability as funding becomes more selective",
    excerpt:
      "Operators are prioritizing lean growth, recurring revenue, and customer retention over pure expansion metrics.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    author: "Newsroom",
    date: "June 29, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "World",
    title: "New regional alliances influence trade, energy, and logistics planning",
    excerpt:
      "Governments are recalibrating supply chains and strategic investments in response to shifting global priorities.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80",
    author: "Global Desk",
    date: "June 29, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Sports",
    title: "Clubs rethink performance strategy with deeper analytics adoption",
    excerpt:
      "Data-led decision making is influencing scouting, recovery plans, and match preparation at every level.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
    author: "Sports Desk",
    date: "June 28, 2026",
    readTime: "3 min read",
  },
];

const trendingTopics = [
  "Elections",
  "Artificial Intelligence",
  "Stock Market",
  "Startups",
  "Cricket",
  "Climate",
];

const editorsPicks: Article[] = [
  {
    id: 6,
    category: "Opinion",
    title: "Why direct, reliable reporting matters more in high-speed media cycles",
    excerpt:
      "Speed gets attention, but clarity and verification build long-term trust with readers.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    author: "Opinion Desk",
    date: "June 28, 2026",
    readTime: "4 min read",
  },
  {
    id: 7,
    category: "Finance",
    title: "Retail investors are demanding simpler tools and better market context",
    excerpt:
      "Product design in trading platforms is shifting toward education, transparency, and faster access to key signals.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    author: "Finance Desk",
    date: "June 27, 2026",
    readTime: "4 min read",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-zinc-600 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span className="font-medium text-zinc-900">Live</span>
            <span>Breaking updates from politics, business, tech, and sports</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tuesday, June 30, 2026</span>
            <Link href="/latest" className="font-medium text-red-600 hover:text-red-700">
              View all news
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[440px]"
              />
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-700">
                    {featuredArticle.category}
                  </span>
                  <span className="text-zinc-500">{featuredArticle.date}</span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500">{featuredArticle.readTime}</span>
                </div>

                <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
                  {featuredArticle.title}
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-200 pt-4">
                  <p className="text-sm text-zinc-500">
                    By <span className="font-medium text-zinc-800">{featuredArticle.author}</span>
                  </p>
                  <Link
                    href={`/news/${featuredArticle.id}`}
                    className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Read story
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-zinc-950">Trending Topics</h2>
                  <Link href="/topics" className="text-sm font-medium text-red-600 hover:text-red-700">
                    See all
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Link
                      key={topic}
                      href={`/topics/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
                    >
                      #{topic}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-zinc-950">Editor&apos;s Picks</h2>
                  <Link href="/editors-picks" className="text-sm font-medium text-red-600 hover:text-red-700">
                    More
                  </Link>
                </div>

                <div className="space-y-4">
                  {editorsPicks.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group flex gap-3 rounded-xl transition"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-24 rounded-xl object-cover"
                      />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
                          {item.category}
                        </p>
                        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-zinc-900 group-hover:text-red-700">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-500">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-950 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  Daily Brief
                </p>
                <h2 className="mt-2 text-2xl font-bold">Start your morning with the biggest headlines.</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Get a sharp summary of the day&apos;s most important stories in one clean digest.
                </p>
                <button className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Latest Coverage
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
              Today&apos;s top updates
            </h2>
          </div>
          <Link href="/latest" className="hidden text-sm font-medium text-red-600 hover:text-red-700 sm:inline-flex">
            Browse all stories
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {latestNews.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
                  <span className="font-semibold uppercase tracking-wide text-red-700">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="line-clamp-3 text-lg font-bold leading-6 text-zinc-950">
                  {article.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">
                  {article.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-500">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}