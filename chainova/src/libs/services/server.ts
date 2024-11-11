// lib/api.ts
"use server"
import { PostModel } from "../types"

// Ensure this module is treated as server-only

export const fetchPosts = async (): Promise<PostModel[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) throw new Error("Failed to fetch posts")

  const data: PostModel[] = await res.json()

  return data
}

export const fetchPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (!res.ok) throw new Error(`Failed to fetch post ${id}`)

  return res.json()
}

export const fetchComments = async (postId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  )

  if (!res.ok) throw new Error(`Failed to fetch comments for post ${postId}`)

  return res.json()
}
