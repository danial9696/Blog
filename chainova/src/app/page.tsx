// app/page.tsx
import { fetchPosts } from "@/libs/services/server"
// import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const BlogPage = async () => {
  const posts = await fetchPosts()

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

      <div className="space-y-4">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>

            <p>{post.body.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default BlogPage
