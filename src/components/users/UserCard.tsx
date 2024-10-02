import Image from "next/image";
import React from "react";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-700">
          2024/25
        </span>
        <Image src="/more.png" alt="More" width={20} height={20} />
      </div>
      <h2 className="text-2xl font-semibold my-4">1,234</h2>
      <h3 className="capitalize text-gray-500 font-medium text-sm">{type}</h3>
    </div>
  );
};

export default UserCard;
