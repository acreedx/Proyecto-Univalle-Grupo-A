const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between py-1 px-3">
        <div className="flex items-center gap-5 ">
          <img className="w-28" src="/UnivalleLogo.png" />
          <div className="text-center">
            <h3 className="text-white font-bold text-5xl">UNIVALLE</h3>
            <hr className="w-64 pb-1 mt-1" />
            <p className="text-white text-xs">
              LA RESPUESTA CIENTIFICA AL FUTURO
            </p>
          </div>
        </div>
      </div>
      <hr className="border-2" />
    </nav>
  );
};

export default Navbar;
