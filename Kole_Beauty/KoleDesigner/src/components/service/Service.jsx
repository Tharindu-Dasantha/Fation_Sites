import React from "react";
import { Icon } from "@mui/material";

function Service(props) {
  return (
    <div>
      <div className="text-center flex flex-col items-center">
        {/* circle */}
        <div className="bg-black w-fit p-2 rounded-full ">
          <Icon component={props.icon} />
        </div>
        {/* Text */}
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
    // <>
    //   hello
    // </>
  );
}

export default Service;
