import express from "express";
import "express-async-errors";
import cors from "cors";
import { json } from "body-parser";
import { searchRouter } from "./routes/search-results";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
export const app = express();
app.use(cors());
app.use(json());

app.use(searchRouter);
app.all("/*", () => {
  throw new NotFoundError();
});
app.use(errorHandler);
