import React, { useEffect, useState } from "react";
import { Grid, Image } from "semantic-ui-react";

const PhotoByDate = props => {
  return (
    <Grid.Column>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="tw-w-full"
          src={props.photo.url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.photo.title}</div>
          <p className="text-gray-700 text-base">{props.photo.explanation}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Copyright: {props.photo.copyright}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {props.photo.date}
          </span>
        </div>
      </div>
    </Grid.Column>
  );
};

export default PhotoByDate;

// {
//    "copyright":"Stefano Cancelli",
//    "date":"2018-03-22",
//    "explanation":"Shiny NGC 253 is one of the brightest spiral galaxies visible, and also one of the dustiest.  Some call it the Silver Dollar Galaxy for its appearance in small telescopes, or just the Sculptor Galaxy for its location within the boundaries of the southern constellation Sculptor.  Discovered in 1783 by mathematician and astronomer Caroline Herschel, the dusty island universe lies a mere 10 million light-years away. About 70 thousand light-years across, NGC 253 is the largest member of the Sculptor Group of Galaxies, the nearest to our own Local Group of Galaxies.  In addition to its spiral dust lanes, tendrils of dust seem to be rising from a galactic disk laced with young star clusters and star forming regions in this sharp color image. The high dust content accompanies frantic star formation, earning NGC 253 the designation of a starburst galaxy. NGC 253 is also known to be a strong source of high-energy x-rays and gamma rays, likely due to massive black holes near the galaxy's center. Take a trip through extragalactic space in this short video flyby of NGC 253.",
//    "hdurl":"https://apod.nasa.gov/apod/image/1803/NGC253-Wide_CancelliMortfield.jpg",
//    "media_type":"image",
//    "service_version":"v1",
//    "title":"NGC 253: Dusty Island Universe",
//    "url":"https://apod.nasa.gov/apod/image/1803/NGC253-Wide_CancelliMortfield1332c.jpg"
// }
