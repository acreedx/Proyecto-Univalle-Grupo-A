import './estilo.css';
import Circularbutton from "@/app/components/circular-button";

function BienvenidaPostgrado() {
    return (
        <div>
            <center>
                <div className='Titulo'>
                    <p className='text-titulo'>PostGrado</p>
                </div>
            </center>
            <div className="container">
                <div className="text-container">
                    <p className='custom-text'>¡Bienvenido a la facultad de Postgrado!</p>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <p className='parrafos'>En Postgrado Univalle contaras con un amplio portafolio de Programas enfocados a satisfacer tus necesidades academicas
                    actuales. La calidad de nuestros programas esta sustentada en la experiencia academica de los profesores, combinada con su desempeño en el mundo laboral actual.</p>
                </div>
                <div className="image-container">
                    <img
                    src="https://img.freepik.com/fotos-premium/grupo-jovenes-estudiantes-felices-universidad_85574-4531.jpg"
                    alt="Ejemplo de imagen"
                    />
                </div>
            </div>
        </div>
    );
}

export default BienvenidaPostgrado;