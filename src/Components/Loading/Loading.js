import React from "react";

const Loading = (SomeComponent) => ({ isloading, ...props }) =>
  isloading ? <SomeComponent {...props} /> : <h2>Loading...</h2>;

export default Loading;
