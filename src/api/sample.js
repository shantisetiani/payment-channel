import { BaseApi } from "./base";

export class SampleApi extends BaseApi {
  constructor() {
    super("todos");
  }

  getTodos = () => {
    return this.make("GET", "/");
  };
}
