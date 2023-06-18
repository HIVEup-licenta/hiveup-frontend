import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import "./HistoryStyle.css";
import { useAuth } from "../../firebaseFunctions/auth";
import { usePosts } from "../../firebaseFunctions/posts";
// import { useUser } from "../../firebaseFunctions/users";
import { useParams } from "react-router-dom";
import PostLayout from "../MyFeed/Posts/PostLayout/PostLayout";

export default function History() {
  // const { id } = useParams();
  // const { user, isLoading: userLoading } = useUser(id);
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";
  return (
    <div className="my-feed">
      <div className="my-feed-posts-list">
          {posts?.length === 0 ? (
            <input className="my-feed-no-posts">No posts yet... Feeling a little lonely here.</input>
          ) : (
            // user.id === uid &&
            posts?.map((post) => <PostLayout key={post.id} post={post} />)
          )}
      </div>
    </div>
  );
}
