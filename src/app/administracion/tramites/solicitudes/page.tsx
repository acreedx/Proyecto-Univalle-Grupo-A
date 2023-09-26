
import ButtonNav from "@/app/components/ButtonNav"
import CircularButton from "@/app/components/circular-button"
export default function Solicitudes() {
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
                            "https://cdn.xxl.thumbs.canstockphoto.com/graduation-cap-and-diploma-icon-in-a-flat-design-vector-illustration-vector-clip-art_csp47390116.jpg"
                        }
                        text={"Extencion del supletorio de diploma academico"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://2.bp.blogspot.com/-JxbmXVacOHI/TwLEbyQ2GdI/AAAAAAAAD6Y/NWkwIhiiIRI/s1600/28Rename.png"
                        }
                        text={"Cambio de apellido"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://th.bing.com/th/id/R.c0edae6b2ed83f05615ccaaf9f0515af?rik=GTx7Y59ScgPxWg&riu=http%3a%2f%2fwww.reflexionesobrasliterarias.com%2fwp-content%2fuploads%2f2019%2f08%2fNacionalidad.png&ehk=Wo50f2rJiOLniXeDN2TeQN2nSxvSIbF0sKVEsvPpB0s%3d&risl=&pid=ImgRaw&r=0"
                        }
                        text={"Cambio de nacionalidad"}
                        routeUrl="/administracion/tramites"
                    />
                </div>
            </div>
        </>
    )

}