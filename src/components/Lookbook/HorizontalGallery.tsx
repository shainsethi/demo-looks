import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LookImage } from '../../types';
import ProgressBar from './ProgressBar';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mic, MicOff } from 'lucide-react';



interface HorizontalGalleryProps {
  images: LookImage[];
  isActive: boolean;
  onNext?: () => void;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ images, onNext }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    if (videoRef.current)
      setIsMuted(true)
    setCurrentImageIndex(swiper.activeIndex);
  };

  const handleProgressComplete = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (onNext) {
      onNext();
    }
  };

  /* States */
  const [isMuted, setIsMuted] = useState(true)

  /* Refs */
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Effects */
  useEffect(() => {
    if (isMuted && videoRef.current)
      videoRef.current.muted = isMuted

  }, [isMuted])



  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10 flex space-x-1 top-4 left-4 right-4">
        {images.map((_, index) => (
          <div key={index} className="flex-1">
            <ProgressBar
              duration={5000}
              isActive={currentImageIndex === index}
              onComplete={handleProgressComplete}
            />
          </div>
        ))}
      </div>

      <Swiper
        modules={[Keyboard, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
        initialSlide={currentImageIndex}
      >
        {images.map((media) => (
          <SwiperSlide
            onMouseDown={() => videoRef.current!.pause()}
            onMouseUp={() => videoRef.current!.play()}
            onMouseLeave={() => videoRef.current!.play()}
            key={media.id}>
            <div className="relative w-full h-full">
              {media.type === 'video' ? (
                <>
                  <button className="absolute z-50 top-12 right-6" onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                  </button>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    className="object-cover w-full h-full rounded-md"
                  >
                    <source src={media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <img
                  src={media.url}
                  alt="Look"
                  className="object-cover w-full h-full rounded-md"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HorizontalGallery;