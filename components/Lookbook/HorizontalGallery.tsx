import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LookImage } from '../../types'
import ProductAnnotation from './ProductAnnotation'
import ProgressBar from './ProgressBar'
import { Mic, MicOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface HorizontalGalleryProps {
    images: LookImage[]
    isActive: boolean
    onNext?: () => void
}

export const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
    images,
    isActive,
    onNext,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showProductDetail, setShowProductDetail] = useState<string | null>(
        null
    )
    const [isMuted, setIsMuted] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    const videoRef = useRef<HTMLVideoElement>(null)
    const navigate = useNavigate()

    const handleProductClick = (productId: string) => {
        setShowProductDetail(productId)
    }

    const handleSlideChange = (swiper: any) => {
        if (videoRef.current) {
            setIsMuted(true)
        }
        setCurrentImageIndex(swiper.activeIndex)
        setShowProductDetail(null)
    }

    const handleProgressComplete = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1)
        } else if (onNext) {
            onNext()
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted
        }
    }, [isMuted])

    const handleTouchStart = () => {
        if (videoRef.current) {
            setIsPaused(true)
            videoRef.current.pause()
        }
    }

    const handleTouchEnd = () => {
        if (videoRef.current) {
            setIsPaused(false)
            videoRef.current.play()
        }
    }

    return (
        <div className="relative w-full h-full">
            <div className="absolute top-4 left-4 right-4 z-10 flex space-x-1">
                {images.map((_, index) => (
                    <div key={index} className="flex-1">
                        <ProgressBar
                            duration={5000}
                            isActive={
                                isActive &&
                                currentImageIndex === index &&
                                !isPaused
                            }
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
                        key={media.id}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleTouchStart}
                        onMouseUp={handleTouchEnd}
                        onMouseLeave={handleTouchEnd}
                    >
                        <div className="relative w-full h-full">
                            {media.type === 'video' ? (
                                <>
                                    <button
                                        className="absolute z-50 top-12 right-6 bg-black bg-opacity-50 p-2 rounded-full"
                                        onClick={() => setIsMuted(!isMuted)}
                                    >
                                        {isMuted ? (
                                            <MicOff
                                                size={24}
                                                className="text-white"
                                            />
                                        ) : (
                                            <Mic
                                                size={24}
                                                className="text-white"
                                            />
                                        )}
                                    </button>
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        webkit-playsinline="true"
                                        x5-playsinline="true"
                                        className="w-full h-full object-cover"
                                        controlsList="nodownload nofullscreen noremoteplayback"
                                        disablePictureInPicture
                                        disableRemotePlayback
                                    >
                                        <source
                                            src={media.url}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </>
                            ) : (
                                <img
                                    src={media.url}
                                    alt="Look"
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {media.annotations.map((annotation) => (
                                <ProductAnnotation
                                    key={annotation.id}
                                    annotation={annotation}
                                    onClick={() =>
                                        handleProductClick(annotation.productId)
                                    }
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {showProductDetail && (
                <div
                    className="absolute bg-white rounded-lg shadow-lg p-4 z-20 animate-fade-in"
                    style={{
                        top: `${
                            images[currentImageIndex].annotations.find(
                                (a) => a.productId === showProductDetail
                            )?.y
                        }%`,
                        left: `${
                            images[currentImageIndex].annotations.find(
                                (a) => a.productId === showProductDetail
                            )?.x
                        }%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div className="absolute top-1 right-1">
                        <button
                            onClick={() => setShowProductDetail(null)}
                            className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 "
                        >
                            ✕
                        </button>
                    </div>

                    {images[currentImageIndex].annotations
                        .filter((a) => a.productId === showProductDetail)
                        .map((a) => (
                            <div key={a.id} className="flex flex-col px-2">
                                <div className="text-sm font-semibold mb-1">
                                    {a.product.name}
                                </div>
                                <div className="text-gray-700 text-sm mb-2">
                                    ${a.product.price.toFixed(2)}
                                </div>

                                <button
                                    className="bg-black text-white py-1 px-3 rounded-md text-xs font-medium"
                                    onClick={() =>
                                        navigate(
                                            `/stores/product/${a.product.id}`
                                        )
                                    } // Navigate to the product page
                                >
                                    Shop This Look
                                </button>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default HorizontalGallery
