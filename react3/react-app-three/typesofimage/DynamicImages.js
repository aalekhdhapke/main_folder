import React from "react";
import image from "react/react3/react-app-three/src/ProfileImage/typesofimage/dynamicimage.js";

export default class Dynamicimage extends React.components {
  render() {
    return (
      <div>
        <img src={image} alt={"Dynamic image"} />
      </div>
    );
  }
}
