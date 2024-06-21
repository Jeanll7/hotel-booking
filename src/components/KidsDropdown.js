import React, { useContext } from 'react';
// contexto da sala
import { RoomContext } from '../context/RoomContext';
// menu da interface do usuário sem cabeça
import { Menu } from '@headlessui/react';
// icons
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  { name: '0 Criança' },
  { name: '1 Criança' },
  { name: '2 Crianças' },
  { name: '3 Crianças' },
  { name: '4 Crianças' },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      {/* btn */}
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === '0 Criança' ? '0 Criança': kids}
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>
      {/* items */}
      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)} 
              as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' 
              key={index}
            >
              {li.name}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
};

export default KidsDropdown;
