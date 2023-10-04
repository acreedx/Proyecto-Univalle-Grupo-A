import { ChangeEvent, useState, useRef } from "react";
import GenericButton from "@/app/components/generic-button";

interface SearchBarProps {
  placeHolder: string;
  searchFunction: Function;
  cleanFunction: Function;
}

function SearchBar({
  placeHolder,
  searchFunction,
  cleanFunction,
}: SearchBarProps) {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCleanFunction = () => {
    cleanFunction();
    if (searchInput.current) searchInput.current.value = "";
  };

  return (
    <div className="mt-2 mx-1 flex flex-col justify-center items-center sm:mx-16 sm:flex-row">
      <input
        placeholder={placeHolder}
        className="py-5 px-3 rounded-3xl text-xs w-full min-[200px]:px-5 min-[320px]:text-sm sm:w-3/4 sm:mr-5 sm:px-10 sm:text-base md:text-xl"
        onChange={handleChange}
        ref={searchInput}
      />
      <div className="flex flex-col gap-2 min-[200px]:flex-row">
        <GenericButton
          text="Buscar"
          functionOnClick={() => searchFunction(search)}
          active={null}
        />
        <GenericButton
          text="Limpiar"
          functionOnClick={handleCleanFunction}
          active={null}
        />
      </div>
    </div>
  );
}

export default SearchBar;
