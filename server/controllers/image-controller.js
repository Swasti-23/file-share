import File from '../models/file.js';

export const uploadImage = async (req, res) => {
    
};

export const getImage = async (req, res) => {
    

    try{
        const file = await File.findById(req.params.fileId);
        file.downloadCount++;
        await file.save();

        res.download(file.path, file.name);
    }catch(error){
        console.log("Error getting file", error);
        res.status(500).json({error: error.message});
    }
};

