import React  from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root')

const ModalOption = (props) => {
  const { closeModal, selectedOption } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className='modal'
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={props.closeModal}>Okay</button>
    </Modal>
  );
};

export default ModalOption;
