import * as React from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
  content: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0 ,0,0,0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: '50',
  },
};

export default function ModalCruiv({
  id,
  selectedModal,
  setSelectedModal,
  className,
}) {
  const modalIsOpen = selectedModal === id;

  function openModal() {
    setSelectedModal(id);
  }

  function closeModal() {
    setSelectedModal(null);
  }

  return (
    <div>
      <div onClick={openModal} className={'marker ' + className}></div>
      {/* The Modal  */}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        overlayClassName="Overlay"
      >
        {/* Modal content */}
        <div className={`modal-container ${modalIsOpen ? 'open' : 'close'}`}>
          <div className="cover">
            <span
              className="close material-symbols-rounded"
              onClick={closeModal}
            >
              close
            </span>
            <img
              src="https://spatialdecisions.com/wp-content/uploads/2024/07/NgocLac-ThanhHoa.png"
              alt="cruiv"
            />
          </div>
          <div className="modal-content">
            <h4>CRUIV</h4>

            <div className="client">
              <strong>Location</strong>
              <p>Ninh Binh – Thanh Hoa – Nghe An – Ha Tinh</p>
            </div>

            <a
              href="https://gis.spatialdecisions.com/cruiv/login"
              target="_blank"
            >
              {' '}
              <span className="material-symbols-rounded">arrow_outward</span>
              View project
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
