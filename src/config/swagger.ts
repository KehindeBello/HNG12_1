import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "HNG12 API",
        version: "1.0.0",
        description: "API for returning email, datetime, and GitHub URL"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Development server"
        }
    ]
};

const swaggerOptions = {
    explorer: true,
    customCss: '.swagger-ui textarea { min-height:60px }',
    // swaggerOptions: {
    //     persistAuthorization: true,
    //     tryItOutEnabled: true
    // }
};

const options = {
    swaggerDefinition,
    apis: ["./src/**/*.ts"], // Path to your API routes for annotations
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerOptions}