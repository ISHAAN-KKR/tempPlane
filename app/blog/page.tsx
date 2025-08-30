import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <p className="text-muted-foreground mt-2">Insights and updates in simple Indian English.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass p-6 rounded-3xl block hover:shadow-soft transition-shadow">
            <h3 className="text-2xl font-semibold">{p.frontmatter.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.frontmatter.excerpt}</p>
            <div className="mt-4 text-xs text-muted-foreground">{new Date(p.frontmatter.date).toLocaleDateString("en-IN")}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
