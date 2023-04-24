import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import PrivateRoutes from "../utils/PrivateRoute";
import Posts2 from "../pages/Posts2";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts2" element={<Posts2 />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts2/:id" element={<PostDetail />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace/>} />
    </Routes>
  );
};

export default AppRouter;
