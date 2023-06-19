import React from "react";
import "./MyFeedStyle.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Textarea } from "@chakra-ui/react";
import { useAuth } from "../../firebaseFunctions/auth";
import { useAddPost, usePosts } from "../../firebaseFunctions/posts";
import { useForm } from "react-hook-form";
import PostLayout from "./Posts/PostLayout/PostLayout";

export default function MyFeed() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <div className="my-feed">
      <div className="my-feed-posts-list">
          {posts?.length === 0 ? (
            <input className="my-feed-no-posts">No posts yet... Feeling a little lonely here.</input>
          ) : (
            posts?.map((post) => <PostLayout key={post.id} post={post} />)
          )}
      </div>
    </div>
  );
}
