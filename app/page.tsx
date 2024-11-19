import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Header */}
      <header className="w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cloudinary Showcase</h1>
        <p className="text-lg text-gray-500">
          Your ultimate platform for managing and sharing media with ease.
        </p>
      </header>

      {/* Features Section */}
      <section className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-6">
        <Link
          href="/video-upload"
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Video Upload{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-500">
            Upload videos, compress them, and manage your media seamlessly.
          </p>
        </Link>

        <Link
          href="/social-share"
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Social Share{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-500">
            Share your media on social platforms effortlessly.
          </p>
        </Link>

        <Link
          href="/analytics"
          className="group rounded-lg border border-transparent px-5 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Analytics{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-gray-500">
            Gain insights into your media performance with detailed analytics.
          </p>
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500">
        <p className="text-sm">
          Powered by{" "}
          <a
            href="https://cloudinary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Cloudinary
          </a>{" "}
          and{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Next.js
          </a>.
        </p>
      </footer>
    </main>
  );
}
