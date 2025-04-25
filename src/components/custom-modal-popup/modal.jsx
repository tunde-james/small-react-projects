/* eslint-disable react/prop-types */
const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <header className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : 'Header'}</h2>
        </header>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <footer className="footer">{footer ? footer : <h2>Footer</h2>}</footer>
      </div>
    </div>
  );
};

export default Modal;
