import React, { useState } from 'react';
import RandomItemModal from './RandomItemModal';
import Image from 'next/image'
import dancingCatIcon from '../app/dancingdumpdumpcat.jpeg';

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
    <div className='bg-grey flex items-center p-4 my-4 '>
      <button
        onClick={pickRandomItem}
        className="bg-white flex items-center text-black px-4 py-2 rounded border border-black"
      >
        <Image src={dancingCatIcon} alt="Dancing Cat" width={94} height={94} className="mr-2" />
        Click on this button
      </button>
      <RandomItemModal isOpen={modalIsOpen} onRequestClose={closeModal} item={randomItem} />
    </div>
  );
};

export default RandomItemPicker;
