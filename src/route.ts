import { Router } from "express";
import { getInfo } from "./controller";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get user email, current datetime, and GitHub repository URL.
 *     description: Returns the registered email, the current datetime in ISO 8601 format, and the GitHub URL for the project.
 *     tags:
 *      - Public
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The registered email address.
 *                   example: user@example.com
 *                 current_datetime:
 *                   type: string
 *                   format: date-time
 *                   description: The current datetime in ISO 8601 format.
 *                   example: 2025-01-30T12:00:00.000Z
 *                 github_url:
 *                   type: string
 *                   description: The GitHub repository URL.
 *                   example: https://github.com/username/repo_name
 */
router.get('/', (req, res) => getInfo(req, res))

export default router;