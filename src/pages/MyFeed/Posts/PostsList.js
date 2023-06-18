import { Box, Text } from "@chakra-ui/react";
import PostLayout from "./PostLayout/PostLayout";

export default function PostsList({ posts }) {
  return (
    // <Box px="4" align="center">
    <div className="post-list">
      {posts?.length === 0 ? (
        <input>
          No posts yet... Feeling a little lonely here.
        </input>
      ) : (
        posts?.map((post) => <PostLayout key={post.id} post={post} />)
      )}
      </div>
    // </Box>
  );
}
