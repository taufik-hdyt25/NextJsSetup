import { NextPageContext } from "next";
import nookies from "nookies";
import { windowLocalStorage, windowSessionStorage } from "./window";

/**
 * Menyimpan cookie.
 *
 * @param {string} params.name - Nama cookie.
 * @param {string} params.value - Nilai dari cookie.
 * @param {number} [params.maxAge=0] - Waktu hidup cookie dalam detik (opsional, default 0).
 * @param {object} [params.context={}] - Context (biasanya digunakan di Next.js untuk SSR) (opsional).
 *
 * @returns {void}
 */
export const setCookies = ({
  name,
  value,
  maxAge = 0,
  context = {},
}: {
  name: string;
  value: string;
  maxAge?: number;
  context?: object;
}) => {
  nookies.set(context, name, value, {
    maxAge,
    sameSite: false,
    path: "/",
  });
};

/**
 * Mengambil nilai cookie berdasarkan nama yang diberikan.
 *
 * @param {string} name - Nama cookie yang ingin diambil.
 * @param {object} [context] - Context (opsional, biasanya digunakan di Next.js untuk SSR).
 * @returns {string | undefined} Nilai cookie jika ditemukan, jika tidak akan `undefined`.
 */
export const getCookies = (name: string, context?: object) => {
  const cookiesBrowser = nookies.get(context);
  return cookiesBrowser[name];
};

/**
 * Menghapus semua cookie berdasarkan nama.
 *
 * @param {string} name - Nama cookie yang ingin diambil.
 * @param {object} [context] - Context (opsional, biasanya digunakan di Next.js untuk SSR).
 * @returns {void}
 */
export const deleteCookies = (name: string, context?: NextPageContext) => {
  nookies.destroy(context, name, {
    path: "/",
  });
};

/**
 * Menghapus semua cookie.
 *
 * @param {object} [context] - Context (opsional, biasanya digunakan di Next.js untuk SSR).
 * @returns {void}
 */
export const clearCookies = (context?: NextPageContext) => {
  if (context?.req) {
    context?.res?.setHeader("set-cookie", []);
  } else {
    const cookies = nookies.get();
    const keys = Object.keys(cookies);

    if (keys) {
      keys.forEach((key: string) => setCookies({ name: key, value: "" }));
    }

    windowLocalStorage("clear");
    windowSessionStorage("clear");
  }
};
