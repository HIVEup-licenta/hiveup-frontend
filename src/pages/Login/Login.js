import { Suspense, lazy } from "react";

const LoginLazy = lazy(() => import("./LoginPage"));

export default function Login() {
  return(
  <Suspense fallback={null}>
    <LoginLazy />
  </Suspense>
  );
};

// export default Login;