import { useState } from "react";

const Display = () => {

    const [comment, setComment] = useState("World!");

    const handleComment = () => {
        setComment("React JS Developer!");
    }

  return (
    <>
      <h2>Hello {comment}</h2>
      <button onClick={handleComment}>Change</button>
    </>
  );
};

export default Display;