import "react-router";

export const ROUTES = {
  HOME: "/",
};

/* Code below is just a way how to type url param. Its will help when some component will redirect user.
 Show what param we should pass to Link */

// export type PathParams = {
//   [ROUTES.HOME]: {
//     someId: string;
//   };
// };

// declare module "react-router" {
//   interface Register {
//     params: PathParams;
//   }
// }
