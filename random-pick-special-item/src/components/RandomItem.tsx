import React, { useState } from 'react';
import RandomItemModal from './RandomItemModal';

const RandomItemPicker: React.FC<{ items: string[] }> = ({ items }) => {
  const [randomItem, setRandomItem] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const pickRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setRandomItem(items[randomIndex]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={pickRandomItem}
        className="text-black bg-white px-4 py-2 rounded border border-black hover:bg-black hover:text-white"
      >
        Please click on this button to see where we should go for dinner
      </button>
      <RandomItemModal isOpen={modalIsOpen} onRequestClose={closeModal} item={randomItem} />
    </div>
  );
};

export default RandomItemPicker;
