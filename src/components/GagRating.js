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
                let rates = store.get('DislikedPosts') || {};
                rates[propsState.id] = false;
                store.set('DislikedPosts', rates)
                setpropsState(data);

            }
            else{
                data.disliked ++;
                rateGag(propsState.id, {action: 'dislike'})
                let rates = store.get('DislikedPosts') || {};
                rates[propsState.id] = true;
                store.set('DislikedPosts', rates)
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
                let rates = store.get('LikedPosts') || {};
                rates[propsState.id] = false;
                store.set('LikedPosts', rates)
                setpropsState(data);
            }
        else{
                data.liked ++;
                rateGag(propsState.id, {action: 'like'})
                let rate = {[propsState.id] : true};
                let rates = store.get('LikedPosts') || {};
                rates[propsState.id] = true
                store.set('LikedPosts', rates)
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
