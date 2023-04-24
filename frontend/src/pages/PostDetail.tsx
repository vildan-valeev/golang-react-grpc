import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader/Loader";
import {IComment, IPost} from "../models/models";

interface PostItemPageParams {
  id: string
}

const PostDetail: FC = () => {
  const params = useParams()
  const [post, setPost] = useState<IPost>({body: "", id: 0, title: ""})
  const [comments, setComments] = useState<IComment[]>([])

  const [fetchPostById, isLoading, error] = useFetching(async (id: number) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, errorComment] = useFetching(async (id: number) => {
    const response = await PostService.getCommentsByPostId(id)
    // @ts-ignore
    setComments(response.data)
  })

  useEffect( () => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h1>Страница поста c ID = {params.id}</h1>
      <hr style={{margin: "15px 0"}}/>
      {isLoading
        ? <Loader/>
        : <div>
          {post.id}. {post.title}

        </div>
      }
      <hr style={{margin: "15px 0"}}/>
      <h1>Комментарии</h1>
      {isLoading
        ? <Loader/>
        : <div>
            {comments.map(comment =>
              <div style={{marginTop: 5}}>
                <h5>{comment.email}</h5>
                <div>
                  {comment.body}
                </div>
              </div>
            )}
          </div>

      }
    </div>
  );
};

export default PostDetail;
