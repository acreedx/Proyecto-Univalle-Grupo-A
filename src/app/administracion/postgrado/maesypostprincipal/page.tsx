import Circularbutton from "@/app/components/circular-button";
import HeaderTitle from '@/app/components/header-title';
import './estilomp.css';

function principal() {
    return(
        <div>
            <HeaderTitle direction="/administracion/postgrado" title="Maestrias, Doctorados y Diplomados" />
            <div className="flex flex-wrap gap-16 w-full justify-center">
                <Circularbutton imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhzId54gDDYfFUCPspPcHXF-WUJw3qmB2hQwzSRvKNp6j3GLEYtlp9w2aeu6um6xM7cU&usqp=CAU"
                text={"Maestrias"}
                routeUrl="/administracion/postgrado/maestrias"
                />
                <Circularbutton imageUrl="https://cochabamba.posgrado.emi.edu.bo/images/2022/07/11/iconos-posgrado-05.png"
                text={"Doctorados"}
                routeUrl="/administracion/postgrado/doctorados"
                />
                <Circularbutton imageUrl="https://capacitateparaelempleo.org/assets/DiplomasImages/18f5f4b4-eadf-41ea-8497-4c9480cc5c4f.png"
                text={"Diplomados"}
                routeUrl="/administracion/postgrado/diplomados"
                />
            </div>
        </div>
    );
}

export default principal;