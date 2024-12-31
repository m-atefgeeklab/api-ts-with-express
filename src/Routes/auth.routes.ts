import { Router } from "express";
import {
  redirectToFacebook,
  handleFacebookCallback,
  createPostHandler,
} from "../Controllers/auth.controller";

const router = Router();

router.get("/facebook-redirect", redirectToFacebook);
router.get("/callback", handleFacebookCallback);
router.post("/create-post", createPostHandler);


export default router;
