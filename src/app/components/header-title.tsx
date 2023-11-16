import ButtonNav from "@/app/components/ButtonNav";

interface headerTitleProps {
  direction: string;
  title?: string;
}

function HeaderTitle({ direction, title }: headerTitleProps) {
  return (
    <div className="mt-2 mx-0 flex flex-col justify-center sm:grid grid-cols-3 sm:mx-16">
      <div className="flex items-end justify-center sm:justify-between">
        <ButtonNav href={direction} text="Volver" />
      </div>
      <h1 className="text-center mt-10 text-xl font-bold text-white col-start-2 whitespace-normal min-[320px]:whitespace-nowrap md:text-2xl xl:text-4xl">
        {title}
      </h1>
    </div>
  );
}

export default HeaderTitle;
