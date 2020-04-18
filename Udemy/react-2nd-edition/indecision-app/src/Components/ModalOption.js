import React  from 'react'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const ModalOption = (props) => {
  const { closeModal, selectedOption } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>{selectedOption}</h1>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default ModalOption;
