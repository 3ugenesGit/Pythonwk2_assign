import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout"; 
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Tasks" element={<TaskPage />} />
        <Route path="/Posts" element={<PostPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
