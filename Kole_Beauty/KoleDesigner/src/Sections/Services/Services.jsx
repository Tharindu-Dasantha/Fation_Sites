import React from "react";
import {FavoriteBorderIcon} from "@mui/icons-material/FavoriteBorder";
import Service from "../../components/service/Service";

function Services() {
  return (
    <>
      <div className="flex gap-24 justify-center">
        <Service icon={FavoriteBorderIcon} title="IMAGINE AND CREATE" description="hello world"/>
        <Service icon={FavoriteBorderIcon} title="IMAGINE AND CREATE" description="hello world"/>
        <Service icon={FavoriteBorderIcon} title="IMAGINE AND CREATE" description="hello world"/>
      </div>
    </>
  );
}

export default Services;
