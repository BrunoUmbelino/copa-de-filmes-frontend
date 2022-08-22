import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
  return (
    <div>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  );
}

export default Loading;
