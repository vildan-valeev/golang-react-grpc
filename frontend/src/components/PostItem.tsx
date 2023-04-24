import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';
import {IPost} from "../models/models";

interface PostItemProps {
    post: IPost
    number: number
    remove(post: IPost): any;
}

const PostItem: FC<PostItemProps> = (props: PostItemProps) => {
  const navigate = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
