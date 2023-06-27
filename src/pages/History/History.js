import React from "react";
import "./HistoryStyle.css";
import { usePosts } from "../../firebaseFunctions/posts";
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
          {posts?.length === 0 ? (
           <Text className="history-no-posts">No posts yet</Text>
          ) : (
            posts.map((post) => (
              <PostLayout key={post.id} post={post} />
            ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
