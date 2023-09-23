import { FC } from "react";
import Link from 'next/link';

interface cardProps {
    title: string;
    children: any;
}
const cardgray: FC<cardProps> = ({ title, children }) => {
  return (
    <>
        <div className="block max-w-sm p-6 bg-gray-500 border border-gray-500 rounded-xl shadow  dark:bg-gray-500 dark:border-gray-500 ">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white text-center">{title}</h5>
            {children}
        </div>
    </>
  );
};
export default cardgray;