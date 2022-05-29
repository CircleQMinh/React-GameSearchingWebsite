import React from "react";

function LoadingGif() {
  return (
    <div className="container w-50">
      <p className="lead text-monospace white text-center fs-2 animate__animated animate__bounce animate__infinite">
        <i className="fa-solid fa-star me-2"></i>Loading ...
      </p>
      <div className="loadingGif">
        <img
          src="https://i.giphy.com/media/Qrca6tBIdqXYXhnB4v/giphy.webp"
          width="100%"
          height="100%"

          className="giphy-embed loadingGifIFrame"
        ></img>
      </div>
    </div>
  );
}

export default LoadingGif;
