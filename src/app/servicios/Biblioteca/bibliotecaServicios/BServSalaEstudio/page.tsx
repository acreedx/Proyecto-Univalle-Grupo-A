import "./style.css";
import VideoPlayer from "@/app/components/video-player";
import HeaderTitle from "@/app/components/header-title";

function prestamosLibros() {
  return (
    <div>
      <HeaderTitle
        direction="/servicios/Biblioteca/bibliotecaServicios"
        title="Salas de Estudio"
      />
      <center>
        <h1>Salas de Estudio</h1>
      </center>
      <div className="contenedor">
        <div className="card">
          <div className="face front bg-[#fff]">
            <img
              id="image"
              src="https://png.pngtree.com/png-vector/20220526/ourlarge/pngtree-open-information-book-with-bookworm-isolated-thin-line-icon-png-image_4741279.png"
              alt="Información"
            />
            <h3>Información</h3>
          </div>
          <div className="face back">
            <h3>Proceso de reserva de una sala de estudio</h3>
            <p>
              1. Diríjase al mostrador de atención de la biblioteca y consulta
              por los horarios de reserva disponibles.
              <br />
              2. Solicite al personal de la biblioteca la disponibilidad de las
              salas de estudio para la fecha y hora específicas que desee.
              <br />
              3. Complete el formulario de reserva proporcionado por el personal
              de la biblioteca y y presente su carné de identidad o carné
              universitario para su verificación.
              <br />
              4. Una vez confirmada la disponibilidad, recibirá una confirmación
              impresa de su reserva junto con las directrices y regulaciones a
              seguir durante su tiempo de uso de la sala de estudio.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="face front bg-[#fff]">
            <img
              id="image"
              src="https://cdn-icons-png.flaticon.com/512/2046/2046636.png"
              alt="Normativa"
            />
            <h3>Normativa de Uso</h3>
          </div>
          <div className="face back">
            <h3>Para el buen uso de las salas de lectura:</h3>
            <p>
              - Se deberá guardar silencio en las salas de estudio.
              <br />
              - No está permitido fumar (ni vapear ), ni consumir ningún tipo de
              comida o bebida.
              <br />
              - Los móviles deberán permanecer en silencio en todo momento.
              <br />
              - Si un puesto de lectura permanece vacante durante más de 30
              minutos, podrá ser ocupado por otro usuario.
              <br />
              - No se podrán reservar plazas de estudio para compañeros.
              <br />- Los usuarios que esten haciendo uso de la sala de estudio
              serán responsables de su conservación en un buen estado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default prestamosLibros;
