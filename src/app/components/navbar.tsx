const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-0 flex items-center justify-between">
        <div className="text-white text-2xl">
          <img
            src="../UnivalleLogo.png"
            alt="icono univalle"
            className="bg-white w-56"
          />
        </div>
      </div>
      <hr className="border-t border-white mt-2" />
    </nav>
  );
};

export default Navbar;
