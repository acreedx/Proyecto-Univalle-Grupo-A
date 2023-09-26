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
                            "https://static.vecteezy.com/ti/vetor-gratis/p3/21023966-planos-icone-vetor.jpg"
                        }
                        text={"Certificado  de calificaciones y programas analiticos"}
                        routeUrl="/administracion/tramites"
                    />
                    <CircularButton
                        imageUrl={
                            "https://th.bing.com/th/id/R.e8475c3411c9046da429b7bf8912cfb2?rik=HHVk8X4pLg528g&riu=http%3a%2f%2fwww.tastunisia.com%2fwp-content%2fuploads%2f2016%2f10%2fimmo_erp.png&ehk=fS4CP%2baTsE6UXg%2btMOz1TZwDccNw1o%2b1tFj%2f1AJei4k%3d&risl=&pid=ImgRaw&r=0"
                        }
                        text={"Certificado de calificaciones"}
                        routeUrl="/administracion/tramites"
                    />
                    
                </div>
            </div>
        </>


    )
}