import {useState, useEffect } from 'react';


// Aula 4 - Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    // Aula 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // Aula 6 - loading
    const [loading, setLoading] = useState(false);

    //  Aula 7 - tratando erros
    const [error, setError] = useState(null);

    // Aula 9 - desafio
    const [itemId, setItemId] = useState(null);


    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data),
            })

            setMethod(method);
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            
            setMethod(method);
            setItemId(data);
        }
    }

    useEffect(() => {
        const fecthData = async () => {

            // Aula 6 - loading
            setLoading(true);

            try {

                const res = await fetch(url);

                const json = await res.json();
    
                setData(json);
            
            } catch (error) {
                console.log(error.message)

                setError("Houve um erro ao carregar os dados")
            }

            setLoading(false);
        }

        fecthData();

    }, [url], callFetch);

    // Aula 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                json = await res.json();
                
                setCallFetch(json);
            } else if(method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);

                json = await res.json()
            }

            setCallFetch(json)
        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading, error };
}