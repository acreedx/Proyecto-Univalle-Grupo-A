interface GenericButtonProps {
  text: string;
  functionOnClick: Function;
  active: boolean | null;
}

function GenericButton({ text, functionOnClick, active }: GenericButtonProps) {
  var styles =
    "cursor-pointer py-2 px-6 rounded-3xl flex items-center space-x-2 mt-2 hover:bg-blue-500 hover:shadow-md transition duration-300 sm:mt-0";

  if (active != null) {
    styles = (!active ? "bg-slate-600" : "bg-blue-500") + " " + styles;
  } else {
    styles = "bg-slate-600 " + styles;
  }

  return (
    <div className={styles} onClick={() => functionOnClick()}>
      <span className="text-white text-xs min-[320px]:text-sm sm:text-base md:text-xl">
        {text}
      </span>
    </div>
  );
}

export default GenericButton;
