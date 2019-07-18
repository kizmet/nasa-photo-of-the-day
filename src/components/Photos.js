import React, { useEffect, useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import PhotoByDate from "./PhotoByDate";

const Apod = props => {
  //const photos = props.photoOfDay;
  return (
    
      
    <PhotoByDate photo={props.photoOfDay} />

    
  );
};

export default Apod;

      //       {photos.map(photo => (
      //   <PhotoByDate key={photo.date.toString()} photo={photo} />
      // ))}