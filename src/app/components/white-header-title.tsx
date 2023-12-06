  import Link from "next/link";
interface headerTitleProps {
  direction: string;
  title: string;
  titleHeader: string;
  directionRight: string;
  titleRight: string;
}

function HeaderTitle({
  direction,
  title,
  titleHeader,
  directionRight,
  titleRight,
}: headerTitleProps) {
  return (
    <div className="mt-4 mx-0 flex flex-col sm:grid grid-cols-3 sm:mx-16">
      <div className="flex items-end justify-center">
        <Link href={direction}>
          <div className="bg-slate-600 py-2 px-6 rounded-3xl flex items-center space-x-2 hover:bg-blue-500 hover:shadow-md transition duration-300">
            <span className="text-white text-xs min-[320px]:text-sm sm:text-base md:text-xl">
              {title}
            </span>
          </div>
        </Link>
      </div>
      <h1 className="text-center  text-xl font-bold text-white col-start-2 md:text-2xl lg:text-3xl xl:text-4xl">
        {titleHeader}
      </h1>
      {/*<div className="flex items-end justify-center">
        <Link href={directionRight}>
          <div className="bg-white py-2 px-6 rounded-3xl flex items-center space-x-2 hover:bg-blue-500 hover:shadow-md transition duration-300">
            <span className="text-red-900 font-bold text-xs min-[320px]:text-sm sm:text-base md:text-xl">
              {titleRight}
            </span>
          </div>
        </Link>
      </div>*/}
    </div>
  );
}

export default HeaderTitle;
