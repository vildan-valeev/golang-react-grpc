import {useMemo} from "react";
import {IPost} from "../models/models";

export const useSortedPosts = (posts: IPost[], sort: string) => {
  return useMemo(() => {
    if (sort) {
      // @ts-ignore
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts]);
}

export const usePosts = (posts: IPost[], sort: string, query: unknown) => {
  const sortedPosts = useSortedPosts(posts, sort)
  return useMemo(() => {
    // @ts-ignore
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts]);
}
