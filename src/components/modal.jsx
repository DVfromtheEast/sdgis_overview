import * as React from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
    left: '1.25rem',
    padding: 0,
    width: '22.5rem',
    maxWidth: '22.5rem',
    height: '32rem',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default function ModalComponent(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal} className={'marker ' + props.className}></div>
      {/* The Modal  */}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        overlayClassName="Overlay"
      >
        {/* Modal content */}

        <div className="cover">
          <span className="close" onClick={closeModal}>
            close
          </span>
        </div>
        <div className="modal-content">
          <h4>CRUIV</h4>
          <p>
            Eget arcu a nunc sed cursus rhoncus sit purus. Egestas malesuada
            lectus laoreet dictum adipiscing euismod proin sit. In mi erat vel
            blandit mauris. Ornare vel amet justo aliquam urna nunc elementum.
            Aliquam non arcu sit orci. Porttitor maecenas a risus at sem neque
            viverra. Pellentesque porttitor placerat nulla orci id in elementum
            amet diam.
          </p>
          <div className="client">
            <strong>Client</strong>
            <p>
              Pellentesque porttitor placerat nulla orci id in elementum amet
              diam.
            </p>
          </div>
          <a href="">View project</a>
        </div>
      </Modal>
    </div>
  );
}
