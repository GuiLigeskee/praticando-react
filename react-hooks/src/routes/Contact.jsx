import React from 'react'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Contact = () => {
  const {contextValue} = useContext(SomeContext);
  return (
    <div>
        <h1>Contact</h1>
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
    </div>
  )
}

export default Contact