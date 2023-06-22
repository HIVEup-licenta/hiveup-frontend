import { Link } from "react-router-dom";
import { APP_REGISTER_URL } from "../shared/constants";
import * as React from "react";
import HiveIcon from "@mui/icons-material/Hive";
import { Heading, Image, Text, Box } from "@chakra-ui/react";
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
            {/* <Box display="flex" alignItems="baseline"></Box> */}
            <Heading mb="4" p="10" size="lg" className="home-body-header">
              You want to help? Give us a hand to manufacture a smile
            </Heading>

            <Box>
              <Text
                mb="4"
                fontFamily="Dancing Script, cursive"
                fontSize="lg"
                as="span"
                color="gray.600"
                display="flex"
                // flexDirection="cce"
                justifyContent="center"
                // marginLeft="300px"
              >
                Here you can find your local comunities that need help and
                youreach out to them or you can give a hand by simply tell
                others about
              </Text>
            </Box>
            

            {/* <Box paddingTop="50px"> */}
              <img
                // boxSize="150px"
                // objectFit="cover"
                src="volunteers.jpg"
                width="100"
                // fallback="https://img.freepik.com/free-vector/charity-flat-concept-with-smiling-volunteers-holding-donation-boxes-big-heart-vector-illustration_1284-79449.jpg?w=1480&t=st=1687462554~exp=1687463154~hmac=2dfb31f9deb2a410e6e0044953062719eb273e3a539a7b60d6a8bbb2400693d7"
                alt="volunteers"
              />
            {/* </Box> */}
            <a className="freepik" href="https://www.freepik.com">Freepik design</a>

          </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}
