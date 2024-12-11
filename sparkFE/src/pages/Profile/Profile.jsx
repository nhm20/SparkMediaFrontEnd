import React, { useState } from "react";
import { useParams } from "react-router-dom";
import profile from "../../assets/profile.png";
import brand from "../../assets/brand.png";
import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
const tabs = [
  {
    value: "post",
    name: "Posts",
  },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];
const posts = [1, 1, 2, 2];
const reels = [1, 2, 3, 4];
const savedPosts = [1, 2, 3, 4];
const Profile = () => {
  const { auth } = useSelector((store) => store);
  const { id } = useParams();
  const [value, setValue] = useState("post");
  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full rounded-t-md"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            src={brand}
            sx={{ width: "10rem", height: "10rem" }}
          />
          {true ? (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth?.user?.firstName.toLowerCase() +
                "_" +
                auth?.user?.lastName.toLowerCase()}
            </h1>
            <p>
              @
              {auth?.user?.firstName.toLowerCase() +
                "_" +
                auth?.user?.lastName.toLowerCase()}
            </p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 Posts</span>
            <span>41 Followers</span>
            <span>41 Following</span>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  label={tab.name}
                  wrapped
                />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" && (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((post, index) => (
                  <div
                    key={`post-${index}`}
                    className="border border-slate-100 rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            )}
            {value === "reels" && (
              <div className="flex flex-wrap justify-center gap-2 my-10">
                {reels.map((reel, index) => (
                  <UserReelCard key={`reel-${index}`} />
                ))}
              </div>
            )}
            {value === "saved" && (
              <div className="space-y-5 w-[70%] my-10">
                {savedPosts.map((post, index) => (
                  <div
                    key={`saved-${index}`}
                    className="border border-slate-100 rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            )}
            {value === "repost" && <div>Repost</div>}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};
export default Profile;
