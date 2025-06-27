import { tokenExistsOrNot } from "@/helpers/anonymous-token";
import { clearCookies } from "@/helpers/cookies";
import { getBasicTokenString, keyToken } from "@/helpers/credentials";
import { setWindowLocation } from "@/helpers/window";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { NextPageContext } from "next";

type ListMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IDefaultHeaders {
  Accept: string;
  "Content-Type": string;
  Authorization?: string;
}

export default interface IPayloadAPI {
  method: string;
  uri: string;
  params?: object;
  additionalHeader?: object;
}

export const setHeaders = (
  dataHeaders: IDefaultHeaders,
  token: string | undefined
) => {
  if (token) {
    dataHeaders.Authorization = `Bearer ${token}`;
  }
  return dataHeaders;
};

export const setAxiosOptions = (
  token: string
): { headers: IDefaultHeaders } => ({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export const setParams = (params: any, method: ListMethods) => {
  const getMethods = ["GET", "DELETE"];
  if (getMethods.includes(method)) {
    return {
      params,
    };
  }
  return {
    data: params,
  };
};

export const callAPI = async ({
  method,
  uri,
  params,
  additionalHeader,
  additionalConfig,
  context = {},
  hostApi = "",
  servicePath = "",
  forceToken = "",
  signal,
}: any) => {
  const defaultHeaders: IDefaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  let url: string = `${hostApi}/${servicePath}`;
  if (uri) {
    url = url + `/${uri}`;
  }
  let headers = { ...defaultHeaders, ...additionalHeader };

  if (forceToken) {
    headers = setHeaders(headers, forceToken);
  } else if (typeof headers.auth === "undefined") {
    let token = getBasicTokenString(context);
    if (context?.req) {
      token = context?.req?.cookies[keyToken]
        ? context?.req?.cookies[keyToken]
        : "";
    }
    headers = setHeaders(headers, token);
  } else {
    const userpass = Buffer.from(
      `${headers.auth.username}:${headers.auth.password}`
    ).toString("base64");
    const basicAuth = `Basic ${userpass}`;
    headers = { ...headers, Authorization: basicAuth };
  }

  const dataOrParams = setParams(params, method.toUpperCase());
  const defaultConfig = { method, headers, url, retry: false };
  const config: AxiosRequestConfig = {
    ...defaultConfig,
    ...dataOrParams,
    ...additionalConfig,
    signal,
  };
  const callbackError = (error: any) => callbackErrorFunction(error, context);
  axios.interceptors.response.use(returnResponse, callbackError);
  return axios(config);
};

export const returnResponse = (response: AxiosResponse) => response;

export const callbackErrorFunction = async (
  error: any,
  context?: NextPageContext
) => {
  const statusCode: number = error?.response?.status;
  if (!statusCode) {
    return Promise.reject({
      response: {
        status: 500,
        data: {
          msg: {
            id: "Terjadi kesalahan pada server, silahkan coba beberapa saat lagi",
            en: "Terjadi kesalahan, silahkan coba beberapa saat lagi",
          },
        },
      },
    });
  }

  // Reject all failed request other than 401
  if (statusCode !== 401) {
    return Promise.reject(error);
  }

  if (statusCode === 401) {
    clearCookies(context);
    await tokenExistsOrNot(context);
    setWindowLocation("/login");
  }

  return Promise.reject(error);
};
