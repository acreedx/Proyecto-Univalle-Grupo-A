import HeaderTitle from "@/app/components/header-title";
export default function page() {
  return (
    <div>
      <HeaderTitle direction="/administracion/cajas" title="Cajas" />
      <div className="flex flex-col justify-center items-center h-full w-full gap-12 mt-20 md:flex-row">
        <img
          src="/administracion/pagos1.jpg"
          alt="Pagos en línea"
          width={"30%"}
          className="w-96 xl:w-1/3"
        />
        <img
          src="/administracion/pagos2.jpg"
          alt="Pagos en línea"
          className="w-96 xl:w-1/3"
        />
      </div>
    </div>
  );
}
