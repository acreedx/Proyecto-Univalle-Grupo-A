import ButtonNav from '@/app/components/ButtonNav';
import './estilompyd.css';

function principal() {
    return(
        <div>
            <center>
                <h1>Maestrías, Doctorados y Diplomados.</h1>
            </center>
            <div className='boton'><ButtonNav href='/administracion/postgrado' text='Volver'/></div>
            <div className="contenedor">
                <div className="card">
                    <div className="face front">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhzId54gDDYfFUCPspPcHXF-WUJw3qmB2hQwzSRvKNp6j3GLEYtlp9w2aeu6um6xM7cU&usqp=CAU" alt="Maestrias" />
                        <h3>Maestrias</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Maestrias</h3>
                        <p>Los Programas de Maestría brindan conocimientos, destrezas y habilidades en diferentes campos y disciplinas científicos. Tiene como sustento el entrenamiento sistemático y riguroso en métodos,
                            técnicas y procedimientos de investigación, los mismos que permiten al maestrante organizar el proceso de construcción de conocimientos en diferentes áreas y disciplinas de la ciencia y la tecnología.</p>
                        <div>
                            <ButtonNav href='/administracion/postgrado/maestrias' text='Más Información'/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://cochabamba.posgrado.emi.edu.bo/images/2022/07/11/iconos-posgrado-05.png" alt="Doctorados" />
                        <h3>Doctorados</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Doctorados</h3>
                        <p>El Programa de Doctorado contempla necesariamente la elaboración presentación sustentación, defensa y aprobación de una tesis doctoral,
                            consistente en una investigación original desarrollada en forma autónoma y que signifique una contribución a la disciplina de que se trate.</p>
                        <div>
                            <ButtonNav href='/administracion/postgrado/doctorados' text='Más Información'/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://capacitateparaelempleo.org/assets/DiplomasImages/18f5f4b4-eadf-41ea-8497-4c9480cc5c4f.png" alt="Doctorados" />
                        <h3>Diplomados</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Diplomados</h3>
                        <p>El Diplomado es un programa de postgrado de carácter sistemático que tiene como propósito profundizar y actualizar conocimientos,
                            habilidades y destrezas que requiere el ejercicio profesional un área o en una disciplina específica.</p>
                        <div>
                            <ButtonNav href='/administracion/postgrado/diplomados' text='Más Información'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default principal;