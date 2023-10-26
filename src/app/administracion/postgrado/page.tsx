import ButtonNav from '@/app/components/ButtonNav';
import './estilop.css';

function BienvenidaPostgrado() {
    return (
        <div>
            <head>
                <title>PostGrado</title>
            </head>
            <center>
                <h1>¡Bienvenido a PostGrado!</h1>  
            </center>
            <div className='boton'><ButtonNav href='/administracion' text='Volver'/></div>
            <div className="contenedor"> 
                <div className="card">
                    <div className="face front">
                        <img src="https://escueladoctorjacintoconvit.files.wordpress.com/2015/10/vision.png" alt="Vision" />
                        <h3>Visión</h3>
                    </div>
                    <div className="face back">
                        <h3>Visión Univalle</h3>
                        <p>Es Visión de la Facultad de Postgrado de la Universidad Privada del Valle, ser un centro de excelencia y de referencia nacional e internacional,
                            en la ejecución de programas de postgrados científicos, en beneficio del interés general, (Concordante con el Art. 103º de la
                            Constitución Política del Estado).
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://dis.uajms.edu.bo/wp-content/uploads/2022/11/RESENA-HISTORICA.png" alt="Historia" />
                        <h3>Historia</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Reseña Historica</h3>
                        <p>En estos 33 años de vida académica, la Universidad del Valle, a través de la Facultad de Postgrado, ha formado más de 20,000 profesionales especialistas a nivel de diplomados, maestrías y doctorados en las 5 sedes de la Universidad.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://uneg.edu.mx/wp-content/uploads/2022/12/8-min.jpg" alt="Maestrías y Doctorados" />
                        <h3>Maestrías, Doctorados y Diplomados.</h3>
                    </div>
                    <div className="face back">
                        <h3>Maestrías, Doctorados y Diplomados</h3>
                        <p>El Objetivo General de la Facultad de Postgrado de la Universidad Privada del Valle, es desarrollar procesos de cualificación de profesionales en un ámbito del conocimiento y la investigación científica.</p>
                        <div className='link'>
                            <ButtonNav href='/administracion/postgrado/maesypostprincipal' text='Más Información'/>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://4.bp.blogspot.com/-svET659LOno/WBlPANPJkII/AAAAAAAAAFA/_fW-6Pyujusi4-tlKSY79HTOu0RWApk-ACLcB/s1600/mision.jpg" alt="Mision" />
                        <h3>Misión</h3>
                    </div>
                    <div className="face back">
                        <h3>Misión Univalle</h3>
                        <p>Es Misión de la Facultad de Postgrado de la Universidad Privada del Valle la cualificación de profesionales en diferentes áreas del conocimiento,
                            mediante el desarrollo y sucesión de procesos de investigación científica y tecnológica y creación de conocimientos, para atender las demandas y
                            expectativas del entorno social y apoyar el desarrollo integral de la sociedad boliviana.
                            (Concordante con el Art 97º de la Constitución Política del Estado).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BienvenidaPostgrado;