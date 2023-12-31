import { useState } from "react";
import {
  MdArrowBackIos as LeftArrow,
  MdArrowForwardIos as RightArrow,
} from "react-icons/md";
import {
  TbArrowBadgeLeft as MobileLeftArrow,
  TbArrowBadgeRight as MobileRightArrow,
} from "react-icons/tb";

const Carousel = ({ imgs, name }: { imgs: string[]; name: string }) => {
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
        <button
          className="bg-black/70 text-primary hidden smm:block text-lg rounded-tl-lg rounded-bl-lg"
          onClick={moveCarouselBackwards}
        >
          <LeftArrow />
        </button>
        <div className="flex overflow-x-hidden flex-1 aspect-video py-0 border-black/70 border-[3px] rounded-md smm:py-1 smm:rounded-none bg-black/70">
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
                alt={`Uma imagem mostrando uma página do projeto ${name}`}
                className="bg-black/70 grow shrink-0 w-full h-full object-cover aspect-video"
              />
            ))}
          </div>
        </div>
        <button
          className="bg-black/70 text-primary hidden smm:block text-lg rounded-tr-lg rounded-br-lg"
          onClick={moveCarouselForward}
        >
          <RightArrow />
        </button>
      </div>
      <div className="flex gap-2 justify-center py-4 items-center">
        <button
          className="p-2 rounded-md text-primary mr-4 bg-black/70 smm:hidden"
          onClick={moveCarouselBackwards}
        >
          <MobileLeftArrow />
        </button>
        {carouselPositionIndicator.map((_, imgPosition) => (
          <button
            className={`grid place-items-center bg-black/75 ${
              imgPosition === carouselIndex && "carousel-position-selected"
            }  carousel-position-indicator z-10 w-3 h-3 rounded-full relative`}
            key={imgPosition}
            onClick={() => setCarouselIndex(imgPosition)}
          />
        ))}
        <button
          className="p-2 rounded-md text-primary ml-4 bg-black/70 smm:hidden"
          onClick={moveCarouselForward}
        >
          <MobileRightArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
