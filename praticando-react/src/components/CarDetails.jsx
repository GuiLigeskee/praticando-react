import React from 'react'

const CarDetails = ({brand, placa, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca : {brand}</li>
            <li>Placa: {placa}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails