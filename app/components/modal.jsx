function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop " onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
      <button className="closeButton" onClick={onClose}>x</button>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;