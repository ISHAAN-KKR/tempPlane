import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/blog");
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article className="container py-12 prose prose-slate max-w-3xl dark:prose-invert">
      <h1 className="font-display text-4xl">{post.frontmatter.title}</h1>
      <p className="text-muted-foreground">{new Date(post.frontmatter.date).toLocaleDateString("en-IN")}</p>
      <div className="mt-6">
        {/* MDX content */}
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
