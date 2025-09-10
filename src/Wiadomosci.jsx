import React, { useEffect, useState } from 'react';
import dummyData from './dummyData';

const Wiadomosci = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // co 1 sekundę aktualizuj indeks, żeby zmienić wyświetlany element
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % dummyData.length);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Wiadomości</h2>
      <ul>
        {dummyData.map((item, idx) => (
          <li key={idx} style={{ display: idx === index ? 'block' : 'none' }}>
            <strong>{item['Imię']} {item['Nazwisko']}</strong>
            <div>Temat: {item['Temat']}</div>
            <div>Wiadomość: {item['Wiadomość']}</div>
            <div>Status: {item['Status']}</div>
            <div>Data wysłania: {item['Data wysłania']}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wiadomosci;
