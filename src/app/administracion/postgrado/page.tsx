import ButtonNav from '@/app/components/ButtonNav';
import './estilo.css';
import HeaderTitle from '@/app/components/header-title';

function BienvenidaPostgrado() {
    return (
        <div>
            <head>
                <title>PostGrado</title>
            </head>
            <HeaderTitle direction="/administracion" title="PostGrado" />
            <div className="contenedor"> 
                <div className="contenedorvm">
                    <h3>Visión Univalle</h3>
                    <p>Es Visión de la Facultad de Postgrado de la Universidad Privada del Valle, ser un centro de excelencia y de referencia nacional e internacional,
                        en la ejecución de programas de postgrados científicos, en beneficio del interés general, (Concordante con el Art. 103º de la
                        Constitución Política del Estado).
                    </p>
                </div>
                <div className="cardS">
                    <div className="face front">
                        <img src="https://dis.uajms.edu.bo/wp-content/uploads/2022/11/RESENA-HISTORICA.png" alt="Historia" />
                        <h3>Historia</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Reseña Historica</h3>
                        <p>En estos 33 años de vida académica, la Universidad del Valle, a través de la Facultad de Postgrado, ha formado más de 20,000 profesionales especialistas a nivel de diplomados, maestrías y doctorados en las 5 sedes de la Universidad.</p>
                    </div>
                </div>
                <div className="cardS">
                    <div className="face front">
                        <img src="https://img.freepik.com/vector-gratis/ubicacion_53876-25530.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais" alt="Ubicación" />
                        <h3>Ubicación</h3>                        
                    </div>
                    <div className="face back">
                        <h3>¡Encuentranos!</h3>
                        <img src="https://media.licdn.com/dms/image/D4E05AQHpK1DBFtuseQ/feedshare-thumbnail_720_1280/0/1693335378796?e=2147483647&v=beta&t=Czd990g-2zXtRVexeWmThPhfrfVoBEdJ0nmrsMeJNN0" alt="PostGrado"/>
                        <p>Si necesitas más información visitanos en: <br/>
                        Av. Argentina 2083, La Paz, Piso 16 Torre A</p>
                    </div>
                </div>
                <div className="cardS">
                    <div className="MDD">
                        <img src="https://uneg.edu.mx/wp-content/uploads/2022/12/8-min.jpg" alt="Maestrías y Doctorados" />
                        <h3>Maestrías, Doctorados y Diplomados.</h3>
                        <div className='boton'><ButtonNav href='/administracion/postgrado/maesypostprincipal' text='Más Información'/></div>
                    </div>
                </div>
                <div className="contenedorvm">
                    <h3>Misión Univalle</h3>
                    <p>Es Misión de la Facultad de Postgrado de la Universidad Privada del Valle la cualificación de profesionales en diferentes áreas del conocimiento,
                        mediante el desarrollo y sucesión de procesos de investigación científica y tecnológica y creación de conocimientos, para atender las demandas y
                        expectativas del entorno social y apoyar el desarrollo integral de la sociedad boliviana.
                        (Concordante con el Art 97º de la Constitución Política del Estado).
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BienvenidaPostgrado;