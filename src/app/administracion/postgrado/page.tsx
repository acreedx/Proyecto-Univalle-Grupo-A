import './estilo.css';

function BienvenidaPostgrado() {
    return (
        <div>
            <head>
                <title>PostGrado</title>
            </head>
            <center>
                <h1>¡Bienvenido a PostGrado!</h1>    
            </center>
            <div className="contenedor">
                <div className="card">
                    <div className="face front">
                        <img src="https://dis.uajms.edu.bo/wp-content/uploads/2022/11/RESENA-HISTORICA.png" alt="Historia" />
                        <h3>Historia</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Reseña Historica</h3>
                        <img src='https://trabajando.com.bo/sites/default/files/2022-04/Univalle%20logo%20.png'/>
                        <p>En estos 33 años de vida académica, la Universidad del Valle, a través de la Facultad de Postgrado, ha formado más de 20,000 profesionales especialistas a nivel de diplomados, maestrías y doctorados en las 5 sedes de la Universidad.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://us.123rf.com/450wm/giamportone/giamportone1711/giamportone171100019/89588402-icono-de-ubicaci%C3%B3n-de-ubicaci%C3%B3n-del-mapa.jpg?ver=6" alt="Ubicación" />
                        <h3>Ubicación</h3>
                    </div>
                    <div className="face back">
                        <h3>¡Encuentranos!</h3>
                        <img src='https://trabajando.com.bo/sites/default/files/2022-04/Univalle%20logo%20.png'/>
                        <p>Estamos ubicados en el piso 16 de la Torre Académica, que se encuentra en la Av. Argentina 2083, La Paz, te esperamos para resolver cualquier duda o consulta sobre la Facultad de PostGrado.</p>
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
                                <a href='/administracion/postgrado/maesypostprincipal'>Más Información</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BienvenidaPostgrado;