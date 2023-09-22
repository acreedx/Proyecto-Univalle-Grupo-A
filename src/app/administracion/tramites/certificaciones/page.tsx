import ButtonNav from "@/app/components/ButtonNav"
import Circularbutton from "@/app/components/circular-button"

export default function Certificaciones() {
    return (
        <div>
            <ul className="flex items-center py-5 p-4 gap-4 justify-center">
                <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
                <ButtonNav href="/" text="Tramites" />
                <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
            </ul>

            <div className="flex justify-center content-center text-center mt-6 px-16">
                <div className="w-full lg:w-4/5 xl:w-3/4">
                    <div className="grid grid-cols-3 gap-14 overflow-auto">

                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                        <Circularbutton
                            imageUrl={
                                "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                            }
                            text={"CERFICADO ALUMNO REGULAR"}
                            routeUrl="/administracion/tramites"
                        />
                    </div>
                </div>
            </div>


        </div>
    )

}