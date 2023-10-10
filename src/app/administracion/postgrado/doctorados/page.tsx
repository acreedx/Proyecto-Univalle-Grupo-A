import './estilo.css';

function doctorados() {
    return(
        <div>
            <center><h1>Doctorados Univalle</h1></center>
            <div className="contenedor">
                <div className="card">
                    <div className="face front">
                        <img src="data:image/png;base64,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" alt="Historia" />
                        <h3>Requisitos</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Requisitos para Doctorados</h3>
                        <p>- Solicitud de admisión al programa. <br/>
                            - 2 copias legalizadas de Diploma Académico de Maestría. <br/>
                            - 2 copias legalizadas del Título en Provisión Nacional de Licenciatura. <br/>
                            - Contrato de estudios. <br/>
                            - 2 Cartas de recomendación. <br/>
                            - Currículo vitae. <br/>
                            - 2 fotocopias del carnet de identidad. <br/>
                            - 1 Certificado de nacimiento original. <br/>
                            - 4 Fotografías 4x4 fondo plomo..</p>
                    </div>
                </div>
                <div className="cardcontenido">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/foto-doctorado02.jpg" alt="Maestrias" />
                        <h3>Modalidad: ON LINE</h3>                        
                    </div>
                </div>
                <div className="cardcontenido">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/foto_doctorado01.png" alt="Doctorados" />
                        <h3>Modalidad: ON LINE</h3>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default doctorados;