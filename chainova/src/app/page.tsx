import { BlogQK } from "@/libs/constants/query-keys"
import { getQueryClient } from "@/libs/services/Query"
import { fetchPosts } from "@/libs/services/server"
import BlogPosts from "@/modules/blog/components/Blog-posts"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

const BlogPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: [BlogQK.GET_BLOG_POSTS],
    queryFn: fetchPosts,
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogPosts />
      </HydrationBoundary>
    </main>
  )
}

export default BlogPage
