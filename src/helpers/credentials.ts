import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { NextPageContext } from "next";

import { getCookies, setCookies } from "./cookies";
import { configEnv } from "@/pages/libraries/config";
import { ICredentials, IProfile } from "@/interfaces/IProfile";

export const keyToken = configEnv.keyToken || "";
export const keyProfile = configEnv.keyProfile;

export const setBasicToken = (
  token: string,
  tokenExpiredInMinutes: number,
  context?: object
): void => {
  const minutes = 2;
  const subSeconds = 60 * minutes;
  const maxAge = tokenExpiredInMinutes * 60 - subSeconds;

  setCookies({ name: keyToken, value: token, maxAge, context });
};

export const getBasicTokenString = (context?: NextPageContext): string => {
  if (context?.req) {
    const headerCookies = context.req.headers?.cookie;
    const value = `; ${headerCookies}`;
    const parts = value.split(`; ${keyToken}=`);
    return parts.length === 2 ? parts.pop()?.split(";").shift() || "" : "";
  }
  return getCookies(keyToken, context) || "";
};

export const saveCredentials = (credentials: ICredentials) => {
  if (credentials) {
    const maxAge = configEnv.tokenExpired * 60;
    setBasicToken(credentials.token, maxAge, {});
    if (!!credentials?.profile) {
      setProfile(credentials?.profile);
    }
  }
};

export const setProfile = (profile: IProfile) => {
  const maxAge = configEnv.tokenExpired * 60;
  setCookies({
    name: keyProfile || "",
    value: JSON.stringify(profile),
    maxAge,
  });
};

export const getProfile = (context?: NextPageContext): IProfile | null => {
  let profileString: string | null = null;

  if (context?.req) {
    const headerCookies = context.req.headers?.cookie || "";
    const parts = `; ${headerCookies}`.split(`; ${keyProfile}=`);
    const rawValue =
      parts.length === 2 ? parts.pop()?.split(";").shift() : null;

    if (rawValue) {
      profileString = decodeURIComponent(rawValue);
    }
  } else {
    const cookieBrowser = getCookies(keyProfile || "", context);
    if (!isNil(cookieBrowser) && !isEmpty(cookieBrowser)) {
      profileString = cookieBrowser;
    }
  }

  try {
    return profileString ? JSON.parse(profileString) : null;
  } catch (e) {
    return null; // JSON parse gagal (format korup, dll)
  }
};
