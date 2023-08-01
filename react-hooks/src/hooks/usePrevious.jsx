import {useEffect, useRef, useDebugValue} from 'react';

export const usePrevious = (value) => {
    const ref = useRef();

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE---");
    useDebugValue("O número anterior é: " + ref);
    
    useEffect(() => {
        ref.current = value;
    });

    return ref.current
}