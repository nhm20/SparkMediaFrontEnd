import { Avatar } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import party from "../../assets/party.png";
const StoryCircle = () => {
  return (
    <div>
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            src={party}
            sx={{ width: "5rem", height: "5rem" }}
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>Party...</p>
        </div>
    </div>
  );
};

export default StoryCircle;
