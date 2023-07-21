import './App.css';
import { useState, useEffect } from 'react';

// Aula 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // Aula4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Aula 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData()
  // }, []);

  // Aula 2 - Add produtos
  const handleSubmit = async (e) => {

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // Aula 3 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // Aula 5 - refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");

  }

  // Aula 9 - desafio
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* Aula 6 - Loading */}
      {loading && <p>Carregando dados</p>}
      {error && <p>{error}</p>}
      {!loading && 
       <ul>
       {items && items.map((product) => (
         <li key={product.id}>
           {product.name} - R$: {product.price};
           <button onClick={() => handleRemove(product.id)}>Excluir</button>
         </li>
       ))}
     </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* Aula 7 - state de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  )
}

export default App
