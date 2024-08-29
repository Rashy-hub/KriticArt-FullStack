import express, { Router } from 'express'
import pingRouter from './pingRouter'
import authRouter from './authRouter'
//import galleryRouter from './photo-router'
//import profilRouter from './profil-router'
//import reviewRouter from './review-router'

const router: Router = express.Router()
router.use('/ping', pingRouter)
router.use('/auth', authRouter)
//router.use('/photo',photoRouter);
//router.use('/profil',profilRouter);
//router.use('/review',reviewRouter);
//router.use('/gallery',galleryRouter);

export default router
