import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { APP_MYFEED_URL, APP_LOGIN_URL } from "../pages/shared/constants";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore";
import doesEmailExists from "./validators";

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isloading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    }

    // console.log(authUser, ".............................");
    // console.log(authLoading, "/////////////loading");

    if (!authLoading) {
      if (authUser) fetchData();
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { user, isloading, error };
}

export function useLogin() {
  const [isloading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = APP_MYFEED_URL }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "You are logged in",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      console.log("You are logged in");
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      console.log("Logging in failed");
      // setLoading(false);
      setLoading(false);
      return false;
    }
    setLoading(false);
    return true;
  }

  return { login, isloading };
}

export function useRegister() {
  const [isloading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function register({
    fName,
    lName,
    phoneNr,
    country,
    city,
    email,
    password,
    redirectTo = APP_MYFEED_URL,
  }) {
    setLoading(true);

    const emailExists = await doesEmailExists(email);

    if (emailExists) {
      toast({
        title: "Email already exists",
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      console.log("Email already exists");
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          fName: fName,
          lName: lName,
          phoneNr: phoneNr,
          country: country,
          city: city,
          avatar: "",
          date: Date.now(),
        });

        toast({
          title: "Account created",
          description: "You are logged in",
          status: "success",
          isClosable: true,
          position: "top",
          duration: 5000,
        });
        console.log("Account created, you are logged in");

        navigate(redirectTo);
      } catch (error) {
          toast({
            title: "Signing Up failed",
            description: error.message,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 5000,

          });
        console.log("Signing Up failed");
      } finally {
        setLoading(false);
      }
    }
  }

  return { register, isloading };
}

export function useLogout() {
  const [signOut, isloading, error] = useSignOut(auth);
  // const toast = useToast();
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      // toast({
      //   title: "Successfully logged out",
      //   status: "success",
      //   isClosable: true,
      //   position: "top",
      //   duration: 5000,
      // });
      console.log("successfully logged out");
      navigate(APP_LOGIN_URL);
    } 
  }

  return { logout, isloading };
}
