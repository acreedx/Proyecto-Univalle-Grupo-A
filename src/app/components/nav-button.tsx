import { FC } from "react";
import Link from "next/link";

interface NavButtonProps {
  routeUrl: string;
}
const navbutton: FC<NavButtonProps> = ({ routeUrl }) => {
  return (
    <>
      <div className="w-[200px]">
        <Link
          href={{ pathname: routeUrl }}
          className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
        >
          Ver detalles
        </Link>
      </div>
    </>
  );
};
export default navbutton;
