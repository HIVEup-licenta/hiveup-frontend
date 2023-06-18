import { Suspense, lazy } from "react";
import React from 'react';

const RegisterLazy = lazy(() => import("./RegisterPage"));

export default function Register() {
  return(
  <Suspense fallback={null}>
    <RegisterLazy />
  </Suspense>
  );
};
