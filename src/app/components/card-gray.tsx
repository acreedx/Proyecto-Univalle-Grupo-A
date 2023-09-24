import { FC } from "react";
import Link from "next/link";

interface cardProps {
  title: string;
  children: any;
}
const Cardgray: FC<cardProps> = ({ title, children }) => {
  return (
    <>
      <div className="block w-full p-6 bg-[#898989] border border-[#898989] rounded-xl shadow dark:bg-[#898989] dark:border-[#898989] text-white dark:text-white text-xs min-[320px]:text-base sm:text-lg md:text-xl xl:text-2xl">
        <h3 className="mb-2 text-base font-bold tracking-tight text-white dark:text-white text-center md:text-2xl xl:text-3xl">
          {title}
        </h3>
        {children}
      </div>
    </>
  );
};
export default Cardgray;
