import express from "express";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec, swaggerOptions } from "./config/swagger";
import router from "./route";

const PORT = 3000;
const app = express();
app.use(express.json());

// CORS HANDLING
app.use(cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// API Documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));

app.use('/', router)

app.listen(PORT, () => {
    console.log(`App Listening on http://localhost:${PORT}`);
})