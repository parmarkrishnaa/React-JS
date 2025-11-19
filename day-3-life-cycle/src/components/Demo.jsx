import React, { useEffect } from "react";

const Demo = ({text}) => {
  useEffect(() => {
    console.log("Component Mounting...");

    return () => {
      console.log("Component Unmounting...");
    };
  }, []);

  return(
    <h2>{text}</h2>
  );
};

export default Demo;