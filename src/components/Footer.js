import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between flex-col sm:flex-row gap-y-4 text-center items-center'>
        <a href='/' className='flex justify-center'>
          <img src={LogoWhite} alt='Logo footer' />
        </a>
        Copyright &copy; 2024 Todos os direitos reservados.
      </div>
    </footer>
  )
};

export default Footer;
