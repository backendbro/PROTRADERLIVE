const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadSingleFile = async (
  filePath,
  section = 'IMAGE',
  resourceType = 'auto',
) => {
  const result = await cloudinary.v2.uploader.upload(filePath, {
    folder: `COPY-TRADING/${section}`,
    resourceType: `${resourceType}`,
  });
  return result;
};




module.exports = uploadSingleFile;
