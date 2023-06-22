import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import "./HistoryStyle.css";
import { useAuth } from "../../firebaseFunctions/auth";
import { usePosts } from "../../firebaseFunctions/posts";
import { useUser } from "../../firebaseFunctions/users";
// import { useUser } from "../../firebaseFunctions/users";
import { useParams } from "react-router-dom";
import PostLayout from "../MyFeed/Posts/PostLayout/PostLayout";
import { Text } from "@chakra-ui/react";

export default function History() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);

  if (postsLoading) return "Loading...";

  return (
    <div className="history">
      <div className="history-posts-list">
      {postsLoading ? (
          <Text>Your posts are loading...</Text>
        ) : (
          <>
            {posts.map((post) => (
              <PostLayout key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
