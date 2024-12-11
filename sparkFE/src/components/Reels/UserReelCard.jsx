import React from "react";
import reel from "../../assets/reel.mp4";
const UserReelCard = () => {
  return (
    <div className="w-[15rem] px-2">
      <video
        className="w-full h-full"
        src={reel}
     controls
      ></video>
    </div>
  );
};

export default UserReelCard;
