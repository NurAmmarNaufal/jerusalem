import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Access_Key = "dSPvEpMqL1dX1X65RJItyi_MIFmLD9eBv3e-ebJtKu8";

const DomeGallery = (props) => {
  console.log(props)
  const [images, setImages] = useState([]);
  const [zoom, setZoom] = useState({ img: "", i: -1 });

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${props.props}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setImages(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const viewImage = (img, i) => {
    setZoom({ img, i });
  };


  const arrows = (direction) => {
    let i = zoom.i;
    console.log(direction)
    if (direction === "left") {
      if (i - 1 > -1) {
        setZoom({ img: images[i - 1], i: i - 1 });
      } else {
        setZoom({ img: "", i: -1 });
      }
    }else if (direction === "right") {
      if (i + 1 < images.length) {
        setZoom({ img: images[i + 1], i: i + 1 });
      } else {
        setZoom({ img: "", i: -1 });
      }
    }else{
      setZoom({ img: "", i: -1 });
    }
  }

  return (
    <>
      {zoom.i > -1 ? (
        <div className="absolute w-full h-full bg-black flex justify-center items-center ">
          <Icon
            icon="mdi:close-box"
            color="white"
            width="30"
            className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer z-[999] opacity-30 hover:opacity-100"
            onClick={() => arrows()}
          />
          <Icon
            icon="material-symbols:arrow-circle-right-rounded"
            color="white"
            width="30"
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100"
            onClick={() => arrows('right')}
          />
          <Icon
            icon="material-symbols:arrow-circle-right-rounded"
            color="white"
            width="30"
            className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rotate-180 opacity-50 hover:opacity-100"
            onClick={() => arrows('left')}
          />
          <img src={zoom.img.urls.full} className="h-full object-contain" />
        </div>
      ) : (
        <div className="w-full h-full">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 100: 1, 150: 2, 200: 3 }}
          >
            <Masonry gutter="5px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image.urls.small}
                  alt=""
                  onClick={() => viewImage(image, i)}
                  className="w-full block cursor-pointer"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </>
  );
};

export default DomeGallery;
