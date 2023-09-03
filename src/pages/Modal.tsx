// import React from 'react';
// import { useModal } from './ModalContext';

// const Modal: React.FC = () => {
//   const { state, dispatch } = useModal();

//   const closeModal = () => {
//     dispatch({ type: 'CLOSE_MODAL' });
//   };

//   return (
//     <>
//       {state.isOpen && (
//         <div className="modal-overlay">
//           <div className="modal-container">
//             <div className="modal-header">
//               <h3>{state.content?.title}</h3>
//               <button className="close-button" onClick={closeModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-content">
//               <p>{state.content?.detail}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;
