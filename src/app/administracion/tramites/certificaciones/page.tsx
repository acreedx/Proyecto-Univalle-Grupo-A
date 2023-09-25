import ButtonNav from "@/app/components/ButtonNav"
import CircularButton from "@/app/components/circular-button"

export default function Certificaciones() {
    return (
        <>
            <ul className="flex items-center py-5 p-4 gap-4 justify-center">
                <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
                <ButtonNav href="/administracion/tramites/procesosAcademicos" text="Procesos academicos" />
                <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
            </ul>
            <div className="flex flex-wrap justify-center items-center gap-9">
                <div className="flex flex-wrap justify-center items-center gap-40">
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-40">
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
                        }
                        text={"CERFICADO ALUMNO REGULAR"}
                        routeUrl="/administracion/tramites"
                    />
                </div>
            </div>
        </>


    )
}