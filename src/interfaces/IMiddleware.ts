export interface IMiddleware<T> {
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  notFound?: boolean;
  props?: T | {};
}
