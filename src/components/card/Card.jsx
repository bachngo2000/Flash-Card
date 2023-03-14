import React, { useState, useCallback } from "react";
import Cards from '../../../data/cards.js';
import './Card.css';
import Button from '../button/Button';
import PostForm from '../Form/PostForm';

const Card = () => {

    const [card, setCard] = useState(Cards[0] ?? ''); 
    const [post, setPost] = useState();
    const [isFront, setFront] = useState(true);

    const handleSubmitForm = useCallback((data) => {
        setPost(data)
      }, [])
    
    const handleFlipCard = useCallback(() => {
        setFront(isFront => !isFront)
    }, [])

    const handleSwitchCard = useCallback((dir) => {
        switch (dir) {
          case 'Previous Card':
            const prevCard = Cards.find(c => c.id === (card.id > 1 ? card.id - 1 : 1))
            setCard(prevCard)
            setFront(true)
            setPost('')
            break;
            
            case 'Next Card':
              
              const nextCard = Cards.find(c => c.id === ((card.id < Cards.length - 1) ? card.id + 1 : Cards.length - 1))
              setCard(nextCard)
              setFront(true)
              setPost('')
          break;
          
          default:
            return
        }
    })

    return (
        <div>
          <div className={`flip-card ${card.level ?? ''}`} onClick={handleFlipCard}>
            <div className={`flip-card-inner ${isFront ? 'front' : ''}`} >
              <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
              <div className="flip-card-back">
                  {/* <img srcSet={card.img ?? ''} alt="answer" /> */}
                <p>{(card.answer ?? '')}</p>
              </div>
            </div>
          </div>
          <div className='dir-btn'>
            <Button onHandleCard={() => handleSwitchCard('Previous Card')}>←</Button>
            <Button onHandleCard={() => handleSwitchCard('Next Card')}>→</Button>
          </div>
          <PostForm
            handleSubmitForm={handleSubmitForm}
            card={card}
            post={post}
          ></PostForm>
        </div>
    );
};
export default Card;
