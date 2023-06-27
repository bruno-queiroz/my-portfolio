import { useState } from "react";
import {
  MdArrowBackIos as LeftArrow,
  MdArrowForwardIos as RightArrow,
} from "react-icons/md";

const Carousel = ({ imgs }: { imgs: string[] }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const moveCarouselForward = () => {
    if (carouselIndex + 1 === imgs.length) {
      setCarouselIndex(0);
      return;
    }
    setCarouselIndex(carouselIndex + 1);
  };

  const moveCarouselBackwards = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(imgs.length - 1);
      return;
    }
    setCarouselIndex(carouselIndex - 1);
  };

  const carouselPositionIndicator = Array.from({ length: imgs.length });

  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <button className="bg-black/75" onClick={moveCarouselBackwards}>
          <LeftArrow />
        </button>
        <div className="flex rounded-sm overflow-x-hidden flex-1 aspect-video">
          <div
            className="flex transition-transform"
            style={{
              transform: `translateX(${carouselIndex * -100}%)`,
            }}
          >
            {imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="An image showing one page of the project"
                className="bg-cyan-950 grow shrink-0 w-full h-full object-contain aspect-video"
              />
            ))}
          </div>
        </div>
        <button className="bg-black/75" onClick={moveCarouselForward}>
          <RightArrow />
        </button>
      </div>
      <div className="flex gap-2 justify-center py-4">
        {carouselPositionIndicator.map((_, imgPosition) => (
          <button
            className={`grid place-items-center bg-black ${
              imgPosition === carouselIndex && "carousel-position-selected"
            }  carousel-position-indicator z-10 w-3 h-3 rounded-full relative`}
            key={imgPosition}
            onClick={() => setCarouselIndex(imgPosition)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;