import React from 'react';

function Header({ title }) {
  return (
    <h1 className="md:text-6xl text-4xl font-bold  mb-12 text-center mt-12 text-forth">
      {title}
    </h1>
  );
}

export default Header;
