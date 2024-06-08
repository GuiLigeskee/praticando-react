import {useState, useEffect, useMemo} from 'react';

const HookUseMemo = () => {

    const [number, setNumber] = useState(0);

    const premimNumbers = useMemo(()=>{
        return ["0", "100", "200"];
    }, []);

    useEffect(() => {
        console.log("Premium numbers foi alterado")
    }, [premimNumbers]);

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} />
        {premimNumbers.includes(number) ? <p>Acertou o número</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo