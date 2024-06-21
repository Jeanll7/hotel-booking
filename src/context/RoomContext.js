import React, { createContext, useEffect, useState } from 'react';
// data
import { roomData } from '../data';
// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adulto');
  const [kids, setKids] = useState('0 Criança');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]); 

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // filtrar quartos com base no total (pessoa)
    const newRooms = roomData.filter((romm) => {
      return total <= romm.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false)
    }, 1000)
  };

  return (
    <RoomContext.Provider value={{ rooms, setRooms, adults, setAdults, kids, setKids, handleClick, loading }}>
      {children} 
    </RoomContext.Provider>
  )
};

export default RoomProvider;
