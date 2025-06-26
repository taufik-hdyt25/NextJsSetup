import { IMiddleware } from "@/interfaces/IMiddleware";
import { NextPageContext } from "next";
// import nookies from "nookies";

export const redirect = (url: string) => ({
  redirect: {
    destination: url,
    permanent: false,
  },
});

export const middleware = (
  ctx: NextPageContext,
  options: any = {}
): IMiddleware<any> => {
  //   const currentUrl = ctx.req.url;
  //   const path = decodeURIComponent(
  //     currentUrl
  //       ?.replace("/_next/data/development", "")
  //       ?.replace("/en", "")
  //       ?.replace("/id", "")
  //       ?.replace(".json", "")
  //   );

  //   const token = getBasicTokenString(ctx);
  //   const isNotInLoginPage = path !== "/login" && !token;
  //   if (isNotInLoginPage) {
  //     if (!token) {
  //       nookies.destroy(ctx, configEnv.keyProfile);
  //       nookies.destroy(ctx, configEnv.keyToken);
  //     }
  //     return redirect(`/login?returnUrl=${path}`);
  //   }

  //   const canonical = path?.split("?")[0];
  //   const profile = getProfile(ctx);

  //   const actualPathWithQuery = path === "/" ? "" : path;
  //   const canonicalPath = canonical === "/" ? "" : canonical;

  const props = {
    ...options,
    // currentUrl: actualPathWithQuery,
    // canonical: canonicalPath,
    // profile,
  };

  return {
    props: { ...props },
  };
};

export const middlewareLogin = (
  ctx: NextPageContext,
  options: any = {}
): IMiddleware<any> => {
  //   const currentUrl = ctx.req.url;
  //   const path = decodeURIComponent(
  //     currentUrl
  //       ?.replace("/_next/data/development", "")
  //       ?.replace("/en", "")
  //       ?.replace("/id", "")
  //       ?.replace(".json", "")
  //   );

  //   const token = getBasicTokenString(ctx);
  //   const isLoggedIn = (path === "/login" || path === "/register") && !!token;

  //   if (isLoggedIn) {
  //     return redirect("/transaction/create");
  //   }

  return {
    props: { ...options },
  };
};
