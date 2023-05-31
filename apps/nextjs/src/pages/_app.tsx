// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";
import { NavBar } from "../components/NavBar";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
