import { CustomError } from "./custom.error";

export class RequestMeliAPIError extends CustomError {
  statusCode = 404;
  reason = "Product not found";
  constructor(public error: string) {
    super(error);

    //Appends extending a built in class TODO: Seach for more info.
    Object.setPrototypeOf(this, RequestMeliAPIError.prototype);
  }

  serializeErrors() {
    return [{ message: this.error }];
  }
}
