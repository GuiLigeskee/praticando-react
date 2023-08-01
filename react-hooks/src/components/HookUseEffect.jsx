import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    // 1 - useEffect sem dependencias
    useEffect(() => {
        // console.log("Estou sendo executado")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // 2 - useEffect com array de dependencias vazio
    useEffect(() => {
        // console.log("Serei executado apenas uma vez!")
    }, [])

    // 3 - useEffect com dependencias no array
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {

        // if(anotherNumber > 0) console.log("Sou executado apenas quando o anotherNumber muda!")

    }, [anotherNumber])

    // 4 - cleanUp do useEffect
    useEffect(() => {

        // const timer = setTimeout(() => {
        //     console.log("Hello world");
        // setAnotherNumber(anotherNumber + 5);
        // }, 2000);

        // return () => clearTimeout(timer);


    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 10)}>Mudar AnotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect