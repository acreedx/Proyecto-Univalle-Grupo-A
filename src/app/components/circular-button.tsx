import { FC } from "react";
import Link from "next/link";

interface CircularButtonProps {
  imageUrl: string;
  text: string;
  routeUrl: string;
}
const circularbutton: FC<CircularButtonProps> = ({
  imageUrl,
  text,
  routeUrl,
}) => {
  return (
    <Link
      href={{ pathname: routeUrl }}
      className="w-36 h-36 rounded-full overflow-hidden bg-cover bg-center text-center shadow-lg transition-transform transform hover:scale-105 md:w-72 md:h-72"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="w-full h-1/2 pb-4 absolute bottom-0 bg-red-950 bg-opacity-50 rounded-b-full flex items-center justify-center">
        <div className="w-3/4 h-full flex items-center justify-center text-center text-white text-xs min-[320px]:text-sm sm:text-sm md:text-2xl font-bold">
          {text}
        </div>
      </div>
    </Link>
  );
};
export default circularbutton;
