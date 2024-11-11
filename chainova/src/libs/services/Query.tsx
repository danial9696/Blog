import { QueryClient } from "@tanstack/react-query"

let browserQueryClient: QueryClient | undefined = undefined

/**
 * This function creates a new QueryClient with default options for managing queries in a TypeScript
 * React application.
 * @returns A function named `makeQueryClient` is being returned. This function creates a new instance
 * of `QueryClient` with default options set for queries, specifically setting the `staleTime` to 60
 * seconds.
 */
export const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })
}

/**
 * The function `getQueryClient` returns a query client if it exists in the browser, otherwise it
 * creates a new one.
 * @returns The `getQueryClient` function returns the `browserQueryClient` if it exists, otherwise it
 * returns a new query client created by the `makeQueryClient` function.
 */
export const getQueryClient = () => {
  if (typeof window === "undefined") return makeQueryClient()

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }

  return browserQueryClient
}
