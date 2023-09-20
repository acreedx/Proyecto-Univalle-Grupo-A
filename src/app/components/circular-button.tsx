import { FC } from "react";
import Link from 'next/link';

interface CircularButtonProps {
  imageUrl: string;
  text: string;
}
const circularbutton: FC<CircularButtonProps> = ({ imageUrl, text }) => {
  return (
    <Link
      href="/cajas"
      className="w-72 h-72 rounded-full overflow-hidden bg-cover bg-center text-center shadow-lg transition-transform transform hover:scale-105"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="w-full h-1/2 pb-4 absolute bottom-0 bg-red-950 bg-opacity-50 rounded-b-full">
        <div className="w-full h-full flex items-center justify-center text-center text-white text-2xl font-bold">
          {text}
        </div>
      </div>
    </Link>
  );
};
export default circularbutton;
