import React from 'react';
import dummyData from './dummyData';

const Wiadomosci = () => {
  return (
    <div>
      <h2>Wiadomości</h2>
      <ul>
        {dummyData.map((item, idx) => (
          <li key={idx}>
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
