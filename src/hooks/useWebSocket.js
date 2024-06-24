import {useState,useRef,useEffect} from "react";
const useWebSocket =(url)=>{

    const [data,setData]= useState(null);
    const webSocket = useRef(null);

    useEffect(() => {
        webSocket.current = new WebSocket(url);

        webSocket.current.onmessage = (event)=>{
            console.log(event)
            setData(JSON.parse(event.data));
        }

        webSocket.current.error =(error)=>{
            console.log("WebSocket Error :" + error)
        }

        webSocket.current.onClose =(event)=>{
            console.log("Web Socket Reconecting")
            setTimeout(()=>{
                webSocket.current = new WebSocket(url);
            },1000)
        }   

        return () => {
            if (webSocket.current) {
            webSocket.current.close();
            }
        };
    }, [url]);


    return data;
}

export default useWebSocket;