import React, {useState, useEffect} from 'react';
import {Button, Card} from 'react-bootstrap';

var store = require('store');
const rateGag = require('../Controllers/GagsController').rateGag;

export default function GagRating(props) {
    const [propsState, setpropsState] = useState({
        id: props.gagId,
        liked: parseInt(props.liked),
        disliked: parseInt(props.disliked)
    });
    const [likeState, setLikeState] = useState(false);
    const [dislikeState, setDislikeState] = useState(false);

    
    function handleDislikeClick(){
        setDislikeState(!dislikeState);
        console.log(dislikeState);
        
        {
            let data = propsState;
            if (dislikeState)
            {
                data.disliked --;
                rateGag(propsState.id, {action: 'undislike'})
                store.set('DislikedPosts', {[propsState.id] : false})
                setpropsState(data);

            }
            else{
                data.disliked ++;
                rateGag(propsState.id, {action: 'dislike'})
                store.set('DislikedPosts', {[propsState.id] : true})
                setpropsState(data);
            }
        }
    }


    function handleLikeClick(){
        setLikeState(!likeState);
        let data = propsState;
        if (likeState)
            {
                data.liked --;
                rateGag(propsState.id, {action: 'unlike'})
                store.set('LikedPosts', {[propsState.id] : false})
                setpropsState(data);
            }
        else{
                data.liked ++;
                rateGag(propsState.id, {action: 'like'})
                store.set('LikedPosts', {[propsState.id] : true})
                setpropsState(data);
            }

    }

    useEffect(() => {
        
        
        try{
            if (store.get('LikedPosts')[propsState.id] == true)
            {
                setLikeState(true);
            }
            else
            {
                setLikeState(false);
            }
        }
        catch{
            
        }
        
        try{
            if (store.get('DislikedPosts')[propsState.id] == true)
            {
                setDislikeState(true);
            }
            else
            {
                setDislikeState(false);
            }
        }
        catch{
        }
       
    }, [])
    
    return (
        <>
            <Card.Text>
                <span className="font-weight-bold">Rating: {propsState.liked - propsState.disliked} </span>
            </Card.Text>
            <Card.Text>
                <Button type="button" 
                        variant={likeState ? "primary" : "outline-primary"} 
                        onClick={() => handleLikeClick()}>
                            {likeState ? "Liked" : "Like"}
                        </Button>
                        
                        <Button type="button" 
                        variant={dislikeState ? "danger" : "outline-danger"} 
                        onClick={() => handleDislikeClick()}>
                            {dislikeState ? "Disliked" : "Dislike"}
                </Button>
            </Card.Text>
            
        </>
    )
}
