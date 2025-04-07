import express from "express";
import { getPlaces, getPlace } from "../controllers/placesController";

const router = express.Router();

router.get("/", getPlaces);
router.get("/:id", getPlace);

export default router;
