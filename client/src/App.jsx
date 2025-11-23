import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [Data, setData] = useState({
    message: '',
    status: '',
    time: '',
    date: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((res) => res.json())
      .then((data) =>
        setData({
          message: data.message || 'No message',
          status: 'Online',
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        }),
      )
      .catch((err) => {
        console.log('Error fetching data:', err);
        setData({
          message: 'Error connecting to server',
          status: 'Offline',
          time: '--',
          date: '--',
        });
      });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold text-cyan-300 leading-relaxed space-y-1">
        <div>Server Status: {Data.status}</div>
        <div>Message: {Data.message}</div>
        <div>Date: {Data.date}</div>
        <div>Time: {Data.time}</div>
      </h1>

      <div className="text-cyan-300 text-xl leading-relaxed font-medium">
  <p>Server Status: {Data.status}</p>
  <p>Message: {Data.message}</p>
  <p>Date: {Data.date}</p>
  <p>Time: {Data.time}</p>
</div>
    </>
  );
}
