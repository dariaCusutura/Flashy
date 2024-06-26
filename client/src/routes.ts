export class Routes {
  static HOME = "/";
  static LOGIN = "/login";
  static SIGNUP = "/signup";
  static MY_STACKS = "/my-stacks";
  static STACK_CARDS(stackName: string) {
    return `/cards/${stackName}`;
  }
}
