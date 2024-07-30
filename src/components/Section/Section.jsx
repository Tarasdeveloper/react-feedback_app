import React from 'react';
import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      <h2>{title}</h2>
      {children}
    </SectionTitle>
  );
};

export default Section;
