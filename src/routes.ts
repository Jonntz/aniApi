import { Router } from "express";
import { Songs } from "./controllers/songsController";

const routes = Router();

// Songs
routes.get("/songs", new Songs().get);
routes.get("/songs/:id", new Songs().getById);
routes.get("/songs/anime/:id", new Songs().getByAnimeId);
routes.get("/songs/title/:title", new Songs().getByName);
routes.get("/songs/artist/:artist", new Songs().getByArtist);
routes.get("/songs/year/:year", new Songs().getByYear);
// routes.get("/songs/album/:album", new Songs().getByAlbum);

export {routes};