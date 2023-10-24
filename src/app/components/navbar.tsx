import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="pl-10 pt-5 pb-0">
      <div className="flex justify-between py-1 px-3">
        <div className="flex items-center gap-5 ">
          <Image className="w-28" src="/UnivalleLogo.png" alt="" width={100} height={100}/>
          <div className="text-center">
            <h3 className="text-white font-bold text-5xl">UNIVALLE</h3>
            <hr className="w-64 pb-1 mt-1" />
            <p className="text-white text-xs">
              LA RESPUESTA CIENTIFICA AL FUTURO
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
