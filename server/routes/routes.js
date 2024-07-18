import express from 'express';
import {uploadImage, getImage} from '../controllers/image-controller.js';  

const router = express.Router();

router.post("/upload",upload.single('file'), uploadImage);
router.post("/file/:fileId?name=''",getImage);


export default router;
