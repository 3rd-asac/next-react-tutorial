import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface PopupProps {
  open: boolean;
  setPopup: React.Dispatch<React.SetStateAction<{ open: boolean }>>;
  message: string;
  title: string;
  callback?: () => void;
}

const Popup: React.FC<PopupProps> = ({
  open,
  setPopup,
  message,
  title,
  callback,
}) => {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
