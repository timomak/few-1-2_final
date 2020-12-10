import React, { useState } from "react";
import "./Band.css";

function Like() {
  var [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes++);
  }

  function decrement() {
    setLikes(likes--);
  }

  return (
    <div className='Like'>
      <button className='line' onClick={decrement}>
        -
      </button>
      <p className='text'>Likes: {likes}</p>
      <button className='line' onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Like;
