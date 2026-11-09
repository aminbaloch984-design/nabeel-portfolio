import Link from "next/link";
import { ArrowRight, Sparkles } from "@/components/Icons";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          Error 404
        </span>
        <h1 className="not-found__title">
          4<span className="text-gradient">0</span>4
        </h1>
        <h2>This page wandered off.</h2>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to something worth seeing.
        </p>
        <Link href="/" className="btn btn--primary btn--lg">
          <Sparkles width="18" height="18" />
          <span>Back to Home</span>
          <ArrowRight width="18" height="18" />
        </Link>
      </div>
    </section>
  );
}
