import React, {FC} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {IPost} from "../models/models";

interface PostListProps {
    posts: IPost[]
    title: string
    remove:IPost
}

const PostList: FC<PostListProps> = ({posts, title, remove}) => {

  if(!posts.length) {
    return (
      <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            className="post"
          >
            <PostItem remove={remove} number={index +1} post={post} />
          </CSSTransition>

        )}
      </TransitionGroup>

    </div>
  );
};

export default PostList;
