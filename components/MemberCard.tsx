import Image from "next/image";

interface MemberCardProps {
  name: string;
  image: string;
}

export default function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="member-card flex flex-col items-center text-center">
      {/* Outer Container for Image + Borders */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Black Border */}
        <div className="absolute w-40 h-40 rounded-full border-4 border-black"></div>
        {/* Gold Border (slightly smaller) */}
        <div className="absolute w-[9.5rem] h-[9.5rem] rounded-full border-4 border-gold"></div>
        {/* White Border (innermost) */}
        <div className="absolute w-[9rem] h-[9rem] rounded-full border-4 border-white"></div>

        {/* Circular Image */}
        <div className="w-36 h-36 overflow-hidden rounded-full">
          <Image 
            src={image} 
            alt={name} 
            width={144} 
            height={144} 
            className="object-cover w-full h-full aspect-square rounded-full"
          />
        </div>
      </div>

      {/* Name Below the Image */}
      <p className="mt-3 text-lg font-semibold text-white">{name}</p>
    </div>
  );
}
