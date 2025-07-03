"use client";

import Image from "next/image";
import { ThumbsUp, Star, StarHalf, StarOff } from "lucide-react";

interface RecentActivityCardProps {
  userName: string;
  userImage: string;
  photos: string[];
  place: {
    name: string;
    rating: number;
    reviewCount: number;
    tags: string[];
    priceLevel: string;
  };
  time: string;
}

export default function RecentActivityCard({
  userName,
  userImage,
  photos,
  place,
  time,
}: RecentActivityCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />);
      } else {
        stars.push(<StarOff key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 max-w-xs">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={userImage}
          alt={`${userName}'s profile`}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">{userName} <span className="font-normal text-gray-500">added {photos.length} photos</span></p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>

      <hr className="mb-3" />

      {/* Place Info */}
      <h3 className="text-sm font-bold mb-1">{place.name}</h3>
      <div className="flex items-center mb-1">
        <div className="flex items-center space-x-0.5">
          {renderStars(place.rating)}
        </div>
        <span className="ml-2 text-sm text-gray-500">{place.reviewCount}</span>
      </div>
      <p className="text-sm text-gray-500 mb-3">
        {place.priceLevel} • {place.tags.join(", ")}
      </p>

      {/* Photos */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {photos.slice(0, 2).map((photo, i) => (
          <div key={i} className="relative aspect-[4/3] rounded border">
            <Image
              src={photo}
              alt={`Photo ${i + 1}`}
              fill
              className="object-cover rounded"
            />
            <div className="absolute bottom-1 right-1 p-1 bg-white rounded-full shadow">
              <ThumbsUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <p className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
        Show all {photos.length} photos
      </p>
    </div>
  );
}
