import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <article className="px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5 items-center">
        {/* Text Section */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            Build Better API Docs with{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Protocol
            </span>
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-700">
            It doesn't matter if you have an API if nobody knows how to use it.
            Teach people the ins and outs of OAuth 2.0 and JWTs in style with
            Protocol, a beautiful API documentation template.
          </p>
          <div>
            <Link
              href="/docs/introduction"
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-3">
          <Image
            src="/banner.png"
            width={1600}
            height={1280}
            alt="API Banner"
            priority
            className="w-full max-w-2xl aspect-[853/682] rounded-xl bg-slate-200 shadow-lg ring-1 ring-slate-900/5 mx-auto"
          />
        </div>
      </div>
    </article>
  );
};

export default Landing;
