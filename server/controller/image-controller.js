import grid from "gridfs-stream";
import mongoose from "mongoose";

const URL = "http://localhost:8000";
let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})

export const uploadImage = async (request, response) => {
    try {
        if (!request.file)
            return response.status(404).json("File not found");

        const imageURL = `${URL}/file/${request.file.filename}`;

        response.status(200).json(imageURL);
        
    } catch (error) {
        response.status(500).json(error);
    }
};

export const getImage = async (req, res) => {
    try {
       const file = await gfs.files.findOne({ filename: req.params.filename }); 
       const readStream = gfs.createReadStream(file.filename);
       readStream.pipe(res);
    } catch (error) {
        res.status(500).json("Failed to fetch the image",error);
    }
};