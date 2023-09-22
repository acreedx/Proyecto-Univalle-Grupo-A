import ButtonNav from "@/app/components/ButtonNav";


export default function Tramites(){
    return (
        <ul className="flex items-center py-5 p-4 gap-4 justify-center">
        <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
        <ButtonNav href="/" text="Tramites" />
        <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
      </ul>
    )        

}