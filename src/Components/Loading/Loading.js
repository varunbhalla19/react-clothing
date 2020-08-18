import React from 'react'

const Loading = (SomeComponent) => ({ loaded, ...props }) =>
  loaded ? <SomeComponent {...props} /> : <h2>Loading...</h2>;

export default Loading;
