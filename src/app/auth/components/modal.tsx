import Button from '@mui/material/Button'
import { useContext } from 'react'
import ReactModal from 'react-modal'
import { ModalContext } from '@auth/context/context'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
}

interface ModalPropsType {
  buttonAction: () => void
}

function Modal(props: ModalPropsType) {
  const { text, isOpen } = useContext(ModalContext)
  return (
    <ReactModal isOpen={isOpen ?? false} style={customStyles}>
      <div>
        <section className="m-auto">
          <div className="text-center f">
            <h1>입력에 문제가 있습니다.</h1>
          </div>
          <div className="text-center">{text}</div>
        </section>

        <section className="m-auto">
          <div className="pt-5 text-center ml-5">
            <Button
              variant="contained"
              color="success"
              onClick={props.buttonAction}>
              다시 시도
            </Button>
          </div>
        </section>
      </div>
    </ReactModal>
  )
}

export default Modal
