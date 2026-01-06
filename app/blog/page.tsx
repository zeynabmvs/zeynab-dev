import type { Metadata } from "next";
import { profile } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog posts and articles by " + profile.name,
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-muted dark:text-muted-dark">
        Coming soon! Check back later for articles and blog posts.
      </p>
    </div>
  );
}

