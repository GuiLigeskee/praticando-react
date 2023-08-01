import { useState } from "react"

const HookUseState = () => {
    // 1 - useState
    let userName = "Guilherme";
    const [name, setName] = useState("Guilherme")

    const changeNames = () => {
        
        userName = "Gulherme Saldanha";

        setName("Guilherme Saldanha");
    }

    // 2 - useState input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        // envio a uma API
        console.log(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Alterar nomes!!!</button>
        <hr />
        {/* 2 - useState input */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
            <p>Você tem {age} anos</p>
    </div>
  )
}

export default HookUseState