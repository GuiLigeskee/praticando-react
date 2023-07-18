import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>profissão: {profissao}</li>
            {idade >= 18 ? (
                <p>Esta pessoa pode possuir carteira de motorista</p>
            ) : (
                <p>Esta pessoa não pode possuir carteira de motorista</p>
            )}
        </ul>
    </div>
  )
}

export default UserDetails