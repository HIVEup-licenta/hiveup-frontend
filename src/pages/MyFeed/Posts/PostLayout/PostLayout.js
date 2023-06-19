import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
// import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../../../firebaseFunctions/auth";
import {
  useAddPost,
  usePosts,
  useDeletePost,
} from "../../../../firebaseFunctions/posts";
import { useUser } from "../../../../firebaseFunctions/users";
import ProfilePicture from "../../../../components/ProfilePicture/ProfilePicture";
import { APP_PROTECTED_URL } from "../../../../pages/shared/constants";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { formatDistanceToNow } from "date-fns";


export default function PostLayout({ post }) {
  // const { user, isLoading } = useUser(uid);
  const { title, subTitle, text, uid, date, id } = post;
  const { user, isLoading } = useUser(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  if (isLoading) return "Loading...";

  return (
    <div class="post-layout-container">
      <Box p="2" maxW="600px" textAlign="left" size="xl">
        <Box
          border="2px solid"
          borderColor="gray.100"
          borderRadius="md"
          minHeight="150px"
          minWidth="700px"
        >
          {/* <div class="post-layout">
            <div class="post-layout-column1"> */}
          {/* <div class="post-layout-header"></div> */}

          {/* <div>
                <div class="post-layout-author">
                  <ProfileButton user={user} />
                </div>
                <div class="post-layout-time">
                  <input>{formatDistanceToNow(date)} ago</input>
                </div>
              </div> */}
          <Flex
            alignItems="center"
            borderBottom="2px solid"
            borderColor="#fcba03"
            p="3"
            bg="gray.50"
          >
            <ProfilePicture user={user} size="md" />
            <Box ml="4">
              <Text fontSize="md" color="fcba03">
                {title}
              </Text>

              <Text fontSize="sm" color="grey">
                {subTitle}
              </Text>

              <Text fontSize="sm" color="gray.500">
                {formatDistanceToNow(date)} ago
              </Text>
            </Box>
          </Flex>
          <div class="post-layout-textbox">
            {/* <div class="post-layout-title">Card Title</div> */}
            {/* <div class="post-layout-subtitle">
                  This explains the card in more detail
                </div> */}
            {/* <div class="post-layout-bar"></div> */}
            <div class="post-layout-description">{text}</div>
            {/*<div class="post-layout-tagbox">
                  <span class="post-layout-tag">HTML</span>
                  <span class="post-layout-tag">CSS</span>
                </div> */}
          </div>

          <Flex p="2">
            {!authLoading && authUser.id === uid && (
              <IconButton
                ml="auto"
                onClick={deletePost}
                isLoading={deleteLoading}
                size="md"
                colorScheme="black"
                variant="ghost"
                icon={<DeleteOutlineIcon />}
                isRound
              />
            )}
          </Flex>
          {/* </div>
          </div> */}
        </Box>
      </Box>
    </div>
  );
}
