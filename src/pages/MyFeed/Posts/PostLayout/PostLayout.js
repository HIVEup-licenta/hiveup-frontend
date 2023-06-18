import { Box, Text, Flex } from "@chakra-ui/react";
// import { formatDistanceToNow } from "date-fns";
import { useAuth } from "../../../../firebaseFunctions/auth";
import { useAddPost, usePosts } from "../../../../firebaseFunctions/posts";
import { useUser } from "../../../../firebaseFunctions/users";
import ProfilePicture from "../../../../components/ProfilePicture/ProfilePicture";
import { APP_PROTECTED_URL } from "../../../../pages/shared/constants";
import { Link } from "react-router-dom";

export default function PostLayout({ post }) {
  // const { user, isLoading } = useUser(uid);
  const { title, text, uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <div class="post-layout-container">
      <Box p="2" maxW="600px" textAlign="left">
        <Box border="2px solid" borderColor="gray.100" borderRadius="md">
          <div class="post-layout">
            <div class="post-layout-column1"></div>

            <div class="post-layout-column2">
              <div class="post-layout-header"></div>
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
                  {/* <button
                    as={Link}
                    to={`${APP_PROTECTED_URL}/profile/${user.id}`}
                    //   colorScheme="teal"
                    variant="link"
                  >
                    {user.fname}
                  </button> */}

                  <Text fontSize="md" color="black">
                  {title}
                  </Text>

                  {/* <Text fontSize="sm" color="gray.500">
                    {formatDistanceToNow(date)} ago
                  </Text> */}
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
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
