import React from "react";

const Loading = (SomeComponent) => ({ isloading, ...props }) => {
  console.log("loading status ==> ", isloading);
  return isloading ? <SomeComponent {...props} /> : <h2>Loading...</h2>;
};

export default Loading;
