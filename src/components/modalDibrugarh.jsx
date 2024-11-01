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

export default function ModalDibrugarh(props) {
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
        <div className="modal-container">
          <div className="cover">
            <span className="close" onClick={closeModal}>
              close
            </span>
            <img
              src="https://spatialdecisions.com/wp-content/uploads/2024/02/dibrugarhCover-1.png"
              alt="dibrugarh"
            />
          </div>
          <div className="modal-content">
            <h4>Climate Resilience Interventions for Dibrugarh Town</h4>

            <div className="client">
              <strong>Client</strong>
              <p>Assam Climate Change Management Society (ACCMS)</p>
            </div>
            <a href="">View project</a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
