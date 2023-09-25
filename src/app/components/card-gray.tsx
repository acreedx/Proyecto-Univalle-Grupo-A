import { FC } from "react";

interface cardProps {
  title: string;
  children: any;
}

const CardGray: FC<cardProps> = ({ title, children }) => {
  return (
    <div className="flex items-center min-h-min justify-center h-80 p-6 bg-gray-500 border border-gray-500 rounded-xl drop-shadow-lg shadow dark:bg-gray-500 dark:border-gray-500">
      <div className="text-center">
        <h5 className="mb-2 font-bold tracking-tight text-white dark:text-white text-lg min-[320px]:text-xl sm:text2xl md:text-3xl">
          {title}
        </h5>
        <div className=" text-white text-base min-[320px]:text-lg sm:text-xl md:text-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardGray;
