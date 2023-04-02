import React from 'react';
import { Body } from '../../features/catalogue/Body';
import { FilterContext } from '../../features/catalogue/FilterContext';
import { Footer } from '../../features/catalogue/Footer';
import { Header } from '../../features/catalogue/Header';

export const Catalogue = () => {
  return (
    <FilterContext>
      <Header />
      <Body />
      <Footer />
    </FilterContext>
  );
};
