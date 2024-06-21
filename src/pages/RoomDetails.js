import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// components

import AdultsDropdown from './../components/AdultsDropdown';
import CheckIn from './../components/CheckIn';
import CheckOut from './../components/CheckOut';
import KidsDropdown from './../components/KidsDropdown';
// scroll top component
import ScrollToTop from './../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
// icons
import { FaCheck } from 'react-icons/fa'

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext)
  const { id } = useParams();

  //get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  })
  
  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section> 
      <ScrollToTop />   
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Detalhes</h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* facilities */}
            <div>
              <h3 className='h3 mb-3'>Instalações do Quarto</h3>
              <p className='mb-12'>
                Id nulla eiusmod laboris occae qui adipisi nisi qui deserunt culpa sectetur esse duis. Mollit excepteur enim ipsum consec proident quat non fugiat eiusmod.
              </p>
              {/* grid */}
              <div className='grid lg:grid-cols-3 grid-cols-2 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div className='flex items-center gap-x-3 flex-1' key={index}>
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* reservation */}
           <div className='py-8 px-6 bg-accent/20 mb-12'>
            <div className='flex flex-col space-y-4 mb-4'>
              <h3>Sua Reserva</h3>
              <div className='h-[60px]'>
                <CheckIn />
              </div>
              <div className='h-[60px]'>
                <CheckOut />
              </div>
              <div className='h-[60px]'>
                <AdultsDropdown />
              </div>
              <div className='h-[60px]'>
                <KidsDropdown />
              </div>
            </div>
            <button className='btn btn-lg btn-primary w-full'>
              Reserve Agora Por ${price}
            </button>
           </div>
           {/* rules */}
           <div>
            <h3  className='h3'>Regras do Hotel</h3>
            <p className='mb-6 font-medium'>1. Check-in/Check-out: Check-in a partir das 14h, check-out até as 12h. <br/>
              2. Cancelamento: Avisar com 48 horas de antecedência.<br/>
              3. Silêncio: Respeitar o silêncio entre 22h e 7h.<br/>
              4. Não Fumante: Proibido fumar em todo o hotel.<br/>
              5. Animais: Animais são permitidos.<br/>
              6. Pagamento: Pague no check-in com cartão de crédito ou débito.<br/>
              Agradecemos sua cooperação. Boa estadia!
            </p>
            <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Check-in 3:00 PM - 9:00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Check-out 10:30 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Sim Pets
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Proibido fumar
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default RoomDetails;
