import Link from "next/link";

interface ButtonNavProps {
  href: string;
  text: string;
  className?:string;
}
function ButtonNav({ href, text, className }: ButtonNavProps) {
  const combinedClassName = `py-2 px-6 rounded-3xl flex items-center space-x-2 hover:bg-blue-500 hover:shadow-md transition duration-300 ${className || 'bg-slate-600'}`;

  return (
    <Link href={href}>
      <div className= {combinedClassName}>
        <span className="text-white text-xs min-[320px]:text-sm sm:text-base md:text-xl">
          {text}
        </span>
      </div>
    </Link>
  );
}

export default ButtonNav;
