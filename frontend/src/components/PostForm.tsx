import React, {FC, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {IPost} from "../models/models";

interface Props {
    create: (post: IPost) => void
}

const PostForm: FC<Props> = ({create}) => {
  const [post, setPost] = useState({title: "", body: ""})


  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: "", body: ""})
  }


  return (

    <form>
      <MyInput
        value={post.title}
        onChange={(e: { target: { value: any; }; }) => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Название поста"/>
      <MyInput
        value={post.body}
        onChange={(e: { target: { value: any; }; }) => setPost({...post, body: e.target.value})}
        type="text"
        placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
