import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';



export const LoadingToRedirect = (props) => {
    let [count, setCount] = useState(6)
    const navigate = useNavigate()                        
    useEffect(()=>{
        const interval = setInterval(() => setCount(currentCount => --currentCount), 1000)
        count === 0 && navigate("/");
        return () => {clearInterval(interval)}
    }, [count])                

    return <div className={'container text-center p-5'}>
        
        you will be redirected in {count} seconds...

        
    </div>
}