"use client"
import React from 'react';
import RandomItemPicker from '../components/RandomItem';
import Header from '@/components/Header';

const items = ['Manwah', 'Topping Beef', 'Hadilao', 'Lamb'];

const Home: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Header />

      <main className="container mx-auto py-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RandomItemPicker items={items} />
        </section>
      </main>
    </div>
  );
};

export default Home;
