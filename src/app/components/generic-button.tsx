interface GenericButtonProps {
  text: string;
  functionOnClick: Function;
}

function GenericButton({ text, functionOnClick }: GenericButtonProps) {
  return (
    <div
      className="cursor-pointer bg-slate-600 py-2 px-6 rounded-3xl flex items-center space-x-2 mt-2 hover:bg-blue-500 hover:shadow-md transition duration-300 sm:mt-0"
      onClick={() => functionOnClick()}
    >
      <span className="text-white text-xs min-[320px]:text-sm sm:text-base md:text-xl">
        {text}
      </span>
    </div>
  );
}

export default GenericButton;
