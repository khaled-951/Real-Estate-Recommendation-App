import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ErrorPage(){
    const history = useHistory();
    const [timeLeft, setTimeLeft] = useState(4);
    useEffect( () => { let isMounted = true; setInterval( () => { if(isMounted) setTimeLeft( (old) => old - 1 ) } , 1000 ); return () => { isMounted = false }; } , [] );
    useEffect( () => { if(timeLeft < 0) { history.push('/'); } } , [timeLeft, history] );

    return(
        <img src="/bg6.jpg" style={{ "position" : "absolute", "width" : "100%", "height" : "100%" }} alt="Error Page" ></img>
    );
}