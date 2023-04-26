import React, {FC, useEffect, useState} from "react";
import '../style/app.css'
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter, {IFilter} from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {IPost} from "../models/models";


function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [filter, setFilter] = useState<IFilter>({sort: "", query: ""})
  const [totalPages, setTotalPages] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit: number, page: number):Promise<void> => {
    const response = await PostService.getAll(limit, page);
    // @ts-ignore
    setPosts(response.items)
    const totalCount = 8
    console.log(totalCount, limit)
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost: IPost): any => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post: IPost):void => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page: number) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: "15px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
          <Loader/>
        </div>
        : <PostList posts={sortedAndSearchPosts} remove={removePost} title={"Список постов про JS"}/>
      }

      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
