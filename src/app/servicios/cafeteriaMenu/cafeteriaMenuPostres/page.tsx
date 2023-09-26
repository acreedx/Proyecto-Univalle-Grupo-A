import ItemMenu from "@/app/components/item-menu";
import ButtonNav from "@/app/components/ButtonNav";
import menu from "@/app/DataTools/DataMenuCafeteria";


function CafeteriaMenuSandwichPage() {
  return (
    
    <main className="h-full grid gap-5">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Cafeteria</h1>
      <ul className="flex items-center py-5 p-4 gap-4 justify-center">
        <ButtonNav href="/servicios/cafeteriaMenu" text="Todo" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuJugos" text="Jugos/Batidos" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuPostres" text="Postres" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuCafes" text="Cafés" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuDesayunos" text="Desayunos" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuSandwiches" text="Sandwiches" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuEspeciales" text="Especiales" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuEnsaladas" text="Ensaladas" />
      </ul>
      
      <div className="flex flex-wrap justify-center items-center gap-4">
        {menu.map((menu) => (
          menu.category == "Postre" ? (
            <ItemMenu
              imageUrl={menu.imageUrl}
              name={menu.name}
              price={menu.price}
              description={menu.description}
            />
          ):null
        ))}
      </div>
    </main>
  );
}

export default CafeteriaMenuSandwichPage;