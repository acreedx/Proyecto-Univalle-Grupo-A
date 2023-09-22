import { FC } from "react";
import Link from 'next/link';

interface cardProps {
    title: string;
    text: string;
}
const card: FC<cardProps> = ({ title, text }) => {
  return (
    <>
        <div className="block max-w-sm p-6 bg-gray-500 border border-gray-500 rounded-xl shadow  dark:bg-gray-500 dark:border-gray-500 ">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white text-center">{title}</h5>
            <p className="font-normal text-lg text-white dark:text-white text-center">{text}</p>
        </div>
    </>
  );
};
export default card;