// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import { NavBar } from "../components/NavBar";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const router = useRouter();
  const { pathname } = router;

  const renderNavBar = pathname === "/";

  return (
    <ClerkProvider {...pageProps}>
      {renderNavBar && <NavBar />}
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

const Greeting = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return <div>{user.firstName}</div>;
};

export default trpc.withTRPC(MyApp);
