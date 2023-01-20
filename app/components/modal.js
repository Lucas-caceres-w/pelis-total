import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="textos" id="contained-modal-title-vcenter">
          Detalles del titulo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="textos">
        <div className="imagenes">
          <Image
            alt="portada"
            width={200}
            height={350}
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.img}`}
          />
          {props.img2 && (
            <Image
              alt="portada"
              width={200}
              height={350}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.img2}`}
            />
          )}
        </div>
        <h4 className="title-modal">{props.titulo}</h4>
        <p>
          <b>Titulo original:</b> {props.original}
        </p>
        <p>
          <b>Donde ver: </b>
          <a
            target={"_blank"}
            rel="noreferrer noopener"
            href={`
          ${props.link}`}
          >
            Link
          </a>
        </p>
        <p>
          <b>Descripción:</b> {props.overview}
        </p>
        <p>
          <b>Votos: </b> {props.votos}
        </p>
        <p>
          <b>Popularidad: </b> {props.popularidad}
        </p>
        <p>
          <b>Idioma: </b> <span className="idioma">{props.idioma}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
