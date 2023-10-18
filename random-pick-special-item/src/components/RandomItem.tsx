import React, { useState } from 'react';
import RandomItemModal from './RandomItemModal'

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
      <button onClick={pickRandomItem}>Pick Random Item</button>
      <RandomItemModal isOpen={modalIsOpen} onRequestClose={closeModal} item={randomItem} />
    </div>
  );
};

export default RandomItemPicker;
