import HeaderTitle from '@/app/components/header-title';
import './estilodoc.css';

function doctorados() {
    return(
        <div>
            <HeaderTitle title='Doctorados Univalle' direction='/administracion/postgrado/maesypostprincipal'/>
            <div className="contenedor">
                <div className="card">
                    <div className="face front">
                        <img src="https://smartpreuniversitario.edu.co/images/iconos/requisitos.png" alt="Requisitos" />
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
                            - 4 Fotografías 4x4 fondo plomo.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/foto-doctorado02.jpg" alt="Maestrias" />
                        <h3>Doctorado en Ciencias Económicas y Administrativas</h3>                        
                    </div>
                    <div className='face back'>
                        <h3>Información</h3>
                        <img src='https://www.univalle.edu/wp-content/uploads/2022/06/sedelapaz01.jpg'></img>
                        <p className='info'>
                        Modalidad: <br/>
                        ON LINE
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="face front">
                        <img src="https://www.univalle.edu/wp-content/uploads/2022/07/foto_doctorado01.png" alt="Doctorados" />
                        <h3>Doctorado en Ciencias de la educación</h3>                        
                    </div>
                    <div className='face back'>
                        <h3>Información</h3>
                        <img src='https://www.univalle.edu/wp-content/uploads/2022/06/sedelapaz01.jpg'></img>
                        <p className='info'>
                        Modalidad: <br/>
                        ON LINE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default doctorados;