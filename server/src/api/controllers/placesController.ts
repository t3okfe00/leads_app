import { Request, Response } from "express";
export const getPlaces = (req: Request, res: Response) => {
  res.send("You are getting all places");
};

export const getPlace = (req: Request, res: Response) => {
  res.send("You are getting a single place");
};
