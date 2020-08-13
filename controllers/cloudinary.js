const cloudinary = require("cloudinary");

async function cloudinaryGet(image, folderPath) {
  try {
    let pathPresent = true;

    console.log("image: ", image);
    console.log("folder path: ", folderPath);
    if (folderPath === "") {
      pathPresent = false;
    }

    const res = await cloudinary.v2.uploader.upload(image, {
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
      cloud_name: process.env.CLOUDINARY_NAME,
      folder: pathPresent ? folderPath : "TinyHouse_Assets/",
    });

    return res.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload to cloudinary: ${error}`);
  }
}
