// components/Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  item: string | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, item }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white text-black p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Tadaaaaaa</h2>
        <p className="text-black">{item}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onRequestClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
