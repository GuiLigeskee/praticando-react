import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Guilherme");

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso...</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>O nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender