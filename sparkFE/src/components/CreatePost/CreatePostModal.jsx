import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Backdrop, CircularProgress, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import VideocamIcon from "@mui/icons-material/Videocam";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ open, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log(" formik values", values);
    },
  });
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
     const handleSelectImage = async (e) => {
       setIsLoading(true);

       try {
         // Check if a file was selected
         if (e.target.files && e.target.files[0]) {
           const imgUrl = await uploadToCloudinary(e.target.files[0], "image");

           if (imgUrl) {
             setSelectedImage(imgUrl); // Update the selected image state
             formik.setFieldValue("image", imgUrl); // Update formik's field value
           } else {
             console.error("Failed to upload image.");
           }
         } else {
           console.error("No file selected.");
         }
       } catch (error) {
         console.error("Error in handleSelectImage:", error);
       } finally {
         setIsLoading(false); // Ensure the loading state is turned off regardless of success or error
       }
     };

  const handleSelectVideo = (e) => {

  
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex items-center space-x-4">
                <Avatar />
                <div>
                  <p className="font-bold text-lg">Spark chat</p>
                  <p className="text-sm">Create Post</p>
                </div>
              </div>
              <textarea
                className="w-full mt-5 p-2 rounded-sm border border-[#3b4054] bg-transparent  outline-none"
                placeholder="write caption..."
                name="caption"
                id=""
                rows="4"
                value={formik.values.caption}
                onChange={formik.handleChange}
              ></textarea>
              <div className="flex items-center space-x-5 mt-5">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    id="image-input"
                    style={{ display: "none" }}
                    onChange={handleSelectImage}
                  />
                  <label htmlFor="image-input">
                    <IconButton color="primary">
                      <ImageIcon />
                    </IconButton>
                    <span>Image</span>
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    accept="video/*"
                    id="video-input"
                    style={{ display: "none" }}
                    onChange={handleSelectVideo}
                  />
                  <label htmlFor="video-input">
                    <IconButton color="primary">
                      <VideocamIcon />
                    </IconButton>
                    <span>Video</span>
                  </label>
                </div>
              </div>
              {selectedImage && (
                <div>
                  <img className="h-[10rem]" src={selectedImage} alt="" />
                </div>
              )}
              <div className="flex w-full justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: "1.5rem" }}
                >
                  Post
                </Button>
              </div>
            </div>
          </form>
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePostModal;
