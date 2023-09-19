import express from "express";
import { UserGetController } from "./get.controller";

const UserRoutes = express.Router()
  .get('/teste', UserGetController.get);

export default UserRoutes;
