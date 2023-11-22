import './style.css';
import VideoPlayer from "@/app/components/video-player";

function prestamosLibros() {
    return(
        <div>
            <center><h1>Prestamo de Libro</h1></center>
            <div className="contenedor">
                <div className="card">
                    <div className="face front bg-[#db8f8f]">
                        <img id="image" src="https://cdn-icons-png.flaticon.com/256/10240/10240486.png?filename=requirement_10240486.png&fd=1" alt="Historia"/>
                        <h3>Detalles de Prestamo</h3>                        
                    </div>
                    <div className="face back">
                        <h3>Requisitos de Prestamo</h3>
                        <p>- Rellenar el formulario de prestamo. <br/>
                            - Carnet de Identidad o Carnet Universitario. <br/>
                        </p>
                        <h3>Detalles de Prestamo</h3>
                        <p>- Para consultar los libros en sala puedes solicitar dos a la vez y acceder a todos los libros que desees. <br/>
                        - Puedes llevarte dos libros a la vez, por dos días hábiles. Asimismo, cuentas con la opción de poder ampliar más tiempo el prestamo.
                        </p>
                    </div>
                </div>
                <div className="cardcontenido">
                    <div className="face front">
                    <VideoPlayer url="https://drive.google.com/uc?id=1oPnVb6v8LoIR4TWvwz5vbVCM4LNkGpTX" width="500" height="450"/>
                    {/* <iframe src="https://drive.google.com/file/d/1oPnVb6v8LoIR4TWvwz5vbVCM4LNkGpTX/preview" width="640" height="480" allow="autoplay"></iframe> */}
                        <h3>Vídeo Informativo: CÓMO SOLICITAR LIBROS EN LA BIBLIOTECA</h3>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default prestamosLibros;