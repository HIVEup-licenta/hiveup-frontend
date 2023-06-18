import React from "react";
import "./NewPostStyle.css";
// import CreatePost from "./Posts/CreatePost";
// import PostList from "./Posts/PostsList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Textarea } from "@chakra-ui/react";
import { useAuth } from "../../firebaseFunctions/auth";
import { useAddPost, usePosts } from "../../firebaseFunctions/posts";
import { useForm } from "react-hook-form";

export default function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  // const { posts, isLoading } = usePosts();

  // if (isLoading) return "Loading posts...";

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
      title: data.title,
      subTitle: data.subTitle,
    });
    console.log(data);
    reset();
  }

  return (
    <div className="new-post">
      <form onSubmit={handleSubmit(handleAddPost)}>
        {/* <div className="new-post-container">
          <div className="new-post-title">My feed</div>
        </div> */}
        <div className="new-post-container">
          <div className="new-post-title">New Post</div>
          <button
            className="new-post-add-post-btn"
            isLoading={authLoading || addingPost}
          >
            <AddBoxIcon className="new-post-add-post-icon" />
          </button>
        </div>

        <label className="new-post-label">Title of your post:</label>
        <Textarea
          resize="none"
          mt="5"
          borderColor={"#fcba03"}
          className="new-post-add-post-input"
          placeholder="Enter a title..."
          minrows={1}
          {...register("title", { required: true })}
        />

        <label className="new-post-label">Subtitle of your post:</label>
        <Textarea
          resize="none"
          mt="5"
          borderColor={"#fcba03"}
          className="new-post-add-post-input"
          placeholder="Enter a subtitle..."
          minrows={1}
          {...register("subTitle", { required: true })}
        />

        <label className="new-post-label">Description of your post:</label>
        <Textarea
          resize="none"
          mt="2"
          borderColor={"#fcba03"}
          className="new-post-add-post-input"
          placeholder="Enter a description..."
          minrows={1}
          {...register("text", { required: true })}
        />
        {/* <div className="new-post-create-post" >
          <CreatePost/>
        </div>
        <div className="new-post-posts-list" >
          <PostList/>
        </div> */}
      </form>
    </div>
  );
}
