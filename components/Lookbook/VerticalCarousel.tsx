import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel } from 'swiper/modules';
import { Look } from '../../types';
import HorizontalGallery from './HorizontalGallery';

import 'swiper/css';
import { useNavigate } from 'react-router-dom';

interface VerticalCarouselProps {
  looks: Look[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ looks }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleNextLook = () => {
    if (activeIndex < looks.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Keyboard, Mousewheel]}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true }}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex}
      >
        {looks.map((look, index) => (
          <SwiperSlide key={look.id} className="w-full h-full">
            <div className="relative w-full h-full">
              <HorizontalGallery
                images={look.media}
                isActive={index === activeIndex}
                onNext={handleNextLook}
              />
              <div className="absolute bottom-10 left-4 right-4 z-20 bg-black bg-opacity-50 p-4 rounded-lg text-white">
                <Swiper
                  modules={[Keyboard, Mousewheel]}
                  direction="horizontal"
                  spaceBetween={0}
                  slidesPerView={1}
                  mousewheel={true}
                  keyboard={{ enabled: true }}
                  className="w-full h-full"
                  onSlideChange={handleSlideChange}
                  initialSlide={activeIndex}
                >
                  {look.relatedProducts.map((item) => {
                    return (
                      <SwiperSlide key={item.id} className="w-full h-full flex gap-8">
                        <img
                          src={item.imageUrl}
                          alt="Look"
                          className="w-28 h-28  rounded-lg object-cover shadow-lg"
                        />
                        <div className="flex flex-col justify-between gap-2">
                          <div>
                            <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                            <p className="text-sm text-gray-200">₹ {item.price}</p>
                          </div>
                          <button
                            onClick={() => navigate(`/stores`)}
                            className="bg-blue-500 hover:bg-blue-600 w-32 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                          >
                            Shop
                          </button>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

export default VerticalCarousel;