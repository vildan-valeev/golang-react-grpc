import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostDetail from "../pages/PostDetail";


const AppRouter: FC = () => {
  return (
      <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" replace/>} />
      </Routes>
  );
};

export default AppRouter;
