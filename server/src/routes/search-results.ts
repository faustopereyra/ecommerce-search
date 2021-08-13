import express from "express";
import { searchAPI, itemDetailAPI, itemDescriptionAPI } from "../services/api";
import parseSearchItem from "../parsers/parse-search-items";

const router = express.Router();
router.get("/api/items/", async (req, res) => {
  const { results, filters } = await searchAPI(req.query.q);
  const items = results
    .slice(0, 4)
    .map((result: any) => parseSearchItem(result));
  const categories =
    filters[0] &&
    filters[0].values[0].path_from_root.map((path: any) => path.name);

  const searchResults = {
    author: {
      name: "Fausto",
      lastname: "Pereyra",
    },
    categories,
    items,
  };
  res.send(searchResults);
});

router.get("/api/items/:id", async (req, res) => {
  const details = await itemDetailAPI(req.params.id);
  const description = await itemDescriptionAPI(req.params.id);
  const item = parseSearchItem(details, description);

  const itemDetails = {
    author: {
      name: "Fausto",
      lastname: "Pereyra",
    },
    item,
  };
  res.send(itemDetails);
});

export { router as searchRouter };
