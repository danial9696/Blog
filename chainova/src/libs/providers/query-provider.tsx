"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { getQueryClient } from "../services/Query"

const QueryProvider = (props: Readonly<{ children: ReactNode }>) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default QueryProvider
