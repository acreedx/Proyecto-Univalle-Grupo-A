import ButtonNav from '@/app/components/ButtonNav';
import './estilomaestrias.css';

function maestrias(){
    return(
        <div>
            <center><h1>Maestrias Univalle</h1></center>
            <div className='boton'><ButtonNav href='/administracion/postgrado/maesypostprincipal' text='Volver'/></div>
            <div className="contenedor">
                <div className="cardM">
                    <div className="face front">
                        <img src="https://serviciosocial.senado.gob.mx/images/requisito.png" alt="Historia" />
                        <h3>Requisitos</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Requisitos para Maestrías</h3>
                        <p>- Curriculum Vitae no documentado <br/>
                            - 2 cartas de recomendación.<br/>
                            - 2 copias legalizadas de Titulo en Provisión Nacional.<br/>
                            - 2 copias legalizadas de diploma académico.<br/>
                            - 2 copias de Cédula de identidad.<br/>
                            - 2 certificados de nacimiento original.<br/>
                            - 4 fotos 4x4 fondo plomo.<br/>
                            - Contrato de estudio y Formulario de Inscripción.<br/>
                            - Carta de aceptación al programa.</p>
                    </div>
                </div>
                <div className="cardM">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/slide_poscbba_maes21.jpg" alt="Maestrias" />
                        <h3>Maestria en Educación Superior</h3>                        
                    </div>
                    <div className='face back'>
                        <h3>Información</h3>
                        <p>Lugar: <br/>
                        Cochabamba <br/>
                        Modalidad:<br/>
                        ON LINE / Semipresencial <br/>
                        Si necesitas más información visitanos en: <br/>
                        Av. Argentina 2083, La Paz, Piso 16 Torre A
                        </p>
                    </div>
                </div>
                <div className="cardM">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/publi_maestrlpz13.jpg" alt="Doctorados" />
                        <h3>Maestria en Tecnologías de información</h3>                        
                    </div>
                    <div className='face back'>
                        <h3>Información</h3>
                        <p>Lugar: <br/>
                        La Paz <br/>
                        Modalidad: <br/>
                        ON LINE / Semipresencial <br/>
                        Si necesitas más información visitanos en: <br/>
                        Av. Argentina 2083, La Paz, Piso 16 Torre A
                        </p>
                    </div>
                </div>
                <div className="cardM">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/slide_poscbba_maes22.jpg" alt="Doctorados" />
                        <h3>Maestria en Marketing</h3>                        
                    </div>
                    <div className='face back'>
                        <h3>Información</h3>
                        <p>Lugar: <br/>
                        Cochabamba <br/>
                        Modalidad: <br/>
                        ON LINE / Semipresencial <br/>
                        Si necesitas más información visitanos en: <br/>
                        Av. Argentina 2083, La Paz, Piso 16 Torre A
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default maestrias;
