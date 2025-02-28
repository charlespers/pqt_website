import Image from "next/image";

interface MemberCardProps {
  name: string;
  image: string;
}

export default function MemberCard({ name, image }: MemberCardProps) {
  return (
    <div className="member-card flex flex-col items-center text-center">
      {/* Circular Image */}
      <div className="relative w-32 h-32">
        <Image 
          src={image} 
          alt={name} 
          width={128} 
          height={128} 
          className="object-cover w-32 h-32 rounded-full border-4 border-orange-500"
        />
      </div>

      {/* Name Below Image */}
      <p className="mt-3 text-md font-semibold">{name}</p>
    </div>
  );
}
