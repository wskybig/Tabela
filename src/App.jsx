import React from 'react'
import MyForm from './MyForm.jsx'
import Wiadomosci from './Wiadomosci'
import './styles.css'

export default function App() {
  return (
    <div>
      <MyForm />
      <hr />
      <h2>DANE TESTOWE (dummy) – REFRESH 1s</h2>
      <Wiadomosci />
    </div>
  )
}
