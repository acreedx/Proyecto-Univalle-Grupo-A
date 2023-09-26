import Link from "next/link";
interface headerTitleProps {
  direction: string;
  title: string;
}

function HeaderTitle({ direction, title }: headerTitleProps) {
  return (
    <div className="mt-2 mx-0 flex flex-col sm:grid grid-cols-3 sm:mx-16">
      <div className=""></div>
      <div className=""></div>
      <div className="flex items-end justify-center">
        <Link href={direction}>
          <div className="bg-white py-2 px-6 rounded-3xl flex items-center space-x-2 hover:bg-blue-500 hover:shadow-md transition duration-300">
            <span className="text-red-900 font-bold text-xs min-[320px]:text-sm sm:text-base md:text-xl">
              {title}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTitle;
