import Image from "next/image";

interface MemberCardProps {
  name: string;
  image: string;
}

export default function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="member-card">
      {/* Container for Image with Triple Border */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-black"></div>
        <div className="absolute inset-1 rounded-full border-4 border-gold"></div>
        <div className="absolute inset-2 rounded-full border-4 border-white"></div>

        {/* Circular Image */}
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <Image 
            src={image} 
            alt={name} 
            width={128} 
            height={128} 
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Name Below the Image */}
      <p className="mt-3 text-lg font-semibold w-32">{name}</p>
    </div>
  );
}
