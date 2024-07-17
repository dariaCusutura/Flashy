export class Routes {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static MY_STACKS = "/my-stacks";
  static STACK_CARDS(stackName: string) {
    return `/cards/${stackName}`;
  }
}

export class PrivateRoutes {
  static MY_STACKS = Routes.MY_STACKS;
  static STACK_CARDS = Routes.MY_STACKS;
}

export function isPrivateRoute(route: string) {
  return Object.values(PrivateRoutes).includes(route);
}
