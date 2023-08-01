import {useEffect, useState, useRef} from 'react'

const HookUseRef = () => {

    // 1 - useRef
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    });

    // useRef e DOM
    const inputRef = useRef();
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setText("");

        inputRef.current.focus();
    }

  return (
    <div>
        <h2>useRef</h2>
        {/* 1 - useRef */}
        <p>O componente renderizou: {numberRef.current} vezes.</p>
        <p>counter 1: {counter}</p>
        <button onClick={()=> setCounter(counter + 1)}>contador A</button>
        <p>counter 1: {counterB}</p>
        <button onClick={()=> setCounter(counterB + 1)}>contador B</button>
        {/* 2 - useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef