import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { APP_PROTECTED_URL } from "../../pages/shared/constants";
import { Link } from "react-router-dom";

export default function ProfilePicture({ user, size = "xl", overrideAvatar = null }) {
  return (
    <ChakraAvatar
      as={Link}
      to={`${APP_PROTECTED_URL}/profile/${user.id}`}
      name={user.fName}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
