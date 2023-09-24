import { FC } from "react";

interface cardProps {
  title: string;
  children: any;
}

const CardGray: FC<cardProps> = ({ title, children }) => {
  return (
    <div className="flex items-center min-h-min justify-center h-80 p-6 bg-gray-500 border border-gray-500 rounded-xl drop-shadow-lg shadow dark:bg-gray-500 dark:border-gray-500">
      <div className="text-center">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
          {title}
        </h5>
        <div className="text-2xl text-white">{children}</div>
      </div>
    </div>
  );
};

export default CardGray;