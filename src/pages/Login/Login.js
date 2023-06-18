import { Suspense, lazy } from "react";
import React from 'react';

const LoginLazy = lazy(() => import("./LoginPage"));

export default function Login() {
  return(
  <Suspense fallback={null}>
    <LoginLazy />
  </Suspense>
  );
};
