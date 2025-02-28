import Image from "next/image";

interface MemberCardProps {
  name: string;
  image: string;
}

export default function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center w-48">
      {/* Outer Container for the Image & Border Layers */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Triple Border Layers */}
        <div className="absolute inset-0 rounded-full border-4 border-black"></div>
        <div className="absolute inset-1 rounded-full border-4 border-gold"></div>
        <div className="absolute inset-2 rounded-full border-4 border-white"></div>

        {/* Circular Image */}
        <div className="w-36 h-36 overflow-hidden rounded-full">
          <Image 
            src={image} 
            alt={name} 
            width={144} 
            height={144} 
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      {/* Name Below the Image (Wrapped Inside the Same Container) */}
      <div className="mt-3 w-full">
        <p className="text-lg font-semibold leading-tight">{name}</p>
      </div>
    </div>
  );
}
