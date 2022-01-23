import { Router } from "express";
import { Animes } from "./controllers/animesController";
import { Episodes } from "./controllers/episodesController";

const routes = Router();

routes.get("/animes", new Animes().get);
routes.get("/animes/:id", new Animes().getById);
routes.get("/animes/title/:title", new Animes().getByName);


// EPISODES
routes.get("/episodes", new Episodes().get);
routes.get("/episodes/:id", new Episodes().getById);
routes.get("/episodes/anime/:id", new Episodes().getByAnimeId);

export {routes};