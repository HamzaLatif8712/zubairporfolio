"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const reviewData = [
    { id: 0, clientName: "David Muir", clientImg: "/assets/davidMuir.webp", review: "He is Good", rating: 4 },
    { id: 1, clientName: "Tristan", clientImg: "/assets/tristan.webp", review: "He is Perfect", rating: 5 },
    { id: 2, clientName: "Alex Aster", clientImg: "/assets/alex.webp", review: "He is Better", rating: 3 },
];

export default function ClientReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviewData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === reviewData.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
            <div
                className="flex transition-transform duration-2000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {reviewData.map((review) => (
                    <div
                        key={review.id}
                        className="w-full flex-shrink-0 flex flex-row items-start gap-2 justify-start text-xl font-semibold pb-10 pt-6 px-10"
                    >
                        <Image alt="clientImg" height={30} width={30} src={review.clientImg}
                            className='rounded-full ms-4'
                            style={{ objectFit: "cover", height: "30px", width: "30px" }}
                        />
                        <div className="w-full bg-red">
                            <div className="flex flex-row items-center justify-between">
                                <p>{review.clientName}</p>
                                <div className="me-4">
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                            </div>
                            <p className="text-black">{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
            >
                &#8592;
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
            >
                &#8594;
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {reviewData.map((review) => (
                    <button
                        key={review.id}
                        onClick={() => setCurrentIndex(review.id)}
                        className={`h-2 w-2 cursor-pointer rounded-full ${currentIndex === review.id ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
