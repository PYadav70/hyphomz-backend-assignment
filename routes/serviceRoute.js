import express from "express"
import { createService, getServices, updateService } from "../controllers/serviceController.js"
import adminMiddleware from "../middleware/adminMiddleware.js"

const serviceRouter = express.Router()

serviceRouter.post('/create',adminMiddleware,createService)
serviceRouter.get('/get',adminMiddleware,getServices)
serviceRouter.put('/update/:id',adminMiddleware,updateService)

export default serviceRouter;