import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'

export default function LikeButton() {
    const [dislikeState, setDislikeState] = useState(false);
    const dislikeRef = useRef(null)
    
    const handleDislikeClick = () =>{
        setDislikeState(!dislikeState);
        
    }
    return (
        <Button type="button" 
        ref={dislikeRef} 
        variant={dislikeState ? "danger" : "outline-danger"} 
        onClick={() => handleDislikeClick()}>
            {dislikeState ? "Disliked" : "Dislike"}
        </Button>
    )
}
