import { Request, Response } from "express";

export const getInfo = (req: Request, res:Response) => {
    res.status(200).json({
        "email": "adedotunomomeji@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/KehindeBello/HNG12_1"
    })
}