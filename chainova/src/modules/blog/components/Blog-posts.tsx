'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import BlogQK from '@/src/libs/constants/query-keys';
import { fetchPosts } from '@/src/libs/services/server';

function BlogPosts() {
  const { data } = useQuery({
    queryKey: [BlogQK.GET_BLOG_POSTS],
    queryFn: fetchPosts,
  });

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Latest blog Posts
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="block p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:bg-gradient-to-br from-blue-50 to-teal-50 transition-transform transform hover:-translate-y-2 hover:scale-105"
          >
            {/* Post title */}
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 truncate">
              {post.title}
            </h2>

            {/* Post body */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              {post.body.substring(0, 100)}...
            </p>

            <span className="text-blue-500 hover:text-teal-500 font-medium">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default BlogPosts;
