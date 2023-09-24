interface requirementProps {
  title: string;
  info: string;
}

function CardRequirement({ title, info }: requirementProps) {
  return (
    <>
      <div className="block w-full p-3 bg-[#AE046E] border border-[#AE046E] rounded-xl shadow dark:bg-[#a74481db] dark:border-gray-500 lg:max-w-sm min-[320px]:p-6">
        <h5 className="mb-2 text-base font-bold tracking-tight text-white dark:text-white text-center md:text-2xl xl:text-3xl">
          {title}
        </h5>
        <p className="text-justify text-slate-300 text-xs min-[320px]:text-base sm:text-lg md:text-xl xl:text-2xl">
          {info}
        </p>
      </div>
    </>
  );
}
export default CardRequirement;
