const cloud_name = "dzqbvwxzl";
const upload_preset = "sparksocial";

export const uploadToCloudinary = async (pics, fileType) => {
  if (!pics || !fileType) {
    console.log("Error: Missing file or file type");
    return;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", upload_preset);

  // Cloudinary API expects the file type in the URL path (image or video)
  const apiUrl =
    fileType === "image"
      ? `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
      : fileType === "video"
      ? `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`
      : null;

  if (!apiUrl) {
    console.log("Error: Invalid file type");
    return;
  }

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Upload failed:", error);
      return;
    }

    const result = await res.json();
    console.log("Uploaded image URL:", result.url);
    return result.url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
  }
};
