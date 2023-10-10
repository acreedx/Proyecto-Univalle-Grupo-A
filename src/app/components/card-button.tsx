import { FC } from "react";
import Link from "next/link";

interface CardButtonProps {
  imageUrl: string;
  title: string;
  routeUrl: string;
  description: string;
}
const cardbutton: FC<CardButtonProps> = ({
  imageUrl,
  title,
  routeUrl,
  description,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/3 px-4 transform transition-transform hover:scale-105">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <img src={imageUrl} alt="image" className="w-full" />

          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <a className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                {title}
              </a>
            </h3>
            <p className="text-base text-body-color leading-relaxed mb-7">
              {description}
            </p>
            <Link
              href={{ pathname: routeUrl }}
              className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default cardbutton;
