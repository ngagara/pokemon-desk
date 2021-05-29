import { useState, useEffect } from 'react';

const useDebaunce = (value: string, delay: number) => {

    const [debaunceValue, setDebaunceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebaunceValue(value)
        }, delay);

        return () => { clearInterval(handler) }
    }, [value])


    return debaunceValue
}

export default useDebaunce;