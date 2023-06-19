import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import "./HistoryStyle.css";
import { useAuth } from "../../firebaseFunctions/auth";
import { usePosts } from "../../firebaseFunctions/posts";
import { useUser } from "../../firebaseFunctions/users";
// import { useUser } from "../../firebaseFunctions/users";
import { useParams } from "react-router-dom";
import PostLayoutHistory from "./PostLayoutHistory";

export default function History() {
  // const { id } = useParams();
  // const { user, isLoading: userLoading } = useUser(id);
  const { posts, isLoading } = usePosts();
  // const { title, subTitle, text, uid, date, id } = post.id;
  // const { user, isLoading:userLoading } = useUser();
  // const { user: authUser, isLoading: authLoading } = useAuth();

  if (isLoading) return "Loading posts...";
  return (
    <div className="my-feed">
      <div className="my-feed-posts-list">
          {posts?.length === 0 ? (
            <input className="my-feed-no-posts">No posts yet... Feeling a little lonely here.</input>
          ) : (
            posts?.map((post) => <PostLayoutHistory key={post.id} post={post} />)
          )}
      </div>
    </div>
  );
}
