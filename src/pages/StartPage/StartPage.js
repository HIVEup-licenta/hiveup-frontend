import { Link } from "react-router-dom";
import { APP_REGISTER_URL } from "../shared/constants";
import * as React from "react";
import HiveIcon from "@mui/icons-material/Hive";
import { Heading, Image, Text, Box } from "@chakra-ui/react";
import "./volunteers4.jpg";
import "./StartPageStyle.css";

export default function Register() {
  return (
    <div className="home-page">
      <div className="home-header">
        <span className="home-register">
          <span className="home-register-text">Hurry up and... </span>
          <span className="site-title">
            <HiveIcon className="site-title-icon" />
            <Link as={Link} to={APP_REGISTER_URL} className="home-register-btn">
              <span className="site-title-text">HIVEup</span>
            </Link>{" "}
          </span>
        </span>
      </div>
      <div className="home-body">
        <Box
          minW="90%"
          minH="xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          backgroundColor="white"
        >
          <div className="home-body-box">
            <Box
              p="6"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Heading mb="4" p="10" size="lg" className="home-body-header">
                Do you want to help? Give us a hand to manufacture a smile
              </Heading>

              <Box>
                <Text
                  mb="4"
                  fontFamily="Dancing Script, cursive"
                  fontSize="lg"
                  as="span"
                  color="gray.600"
                  display="flex"
                  justifyContent="center"
                >
                  Here you can find your local comunities that need help. You can reach out to them or you can give a hand by simply tell
                  others about them
                </Text>
              </Box>

              <div className="home-body-img">
                <Box
                  p="6"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                >
                    <div></div>
                </Box>
              </div>
              <a className="freepik" href="https://www.freepik.com">
                Freepik design
              </a>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}
