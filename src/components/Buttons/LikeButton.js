import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'

export default function LikeButton() {
    const [state, setState] = useState(false);
    const ref = useRef(null)
    
    const handleClick = () =>{
        setState(!state);
        
    }
    return (
        <Button type="button" ref={ref} variant={state ? "primary" : "outline-primary"} onClick={() => handleClick()}>{state ? "Liked" : "Like"}</Button>
    )
}
