import React from 'react';
import './Header.css';
import Cards from '../../../data/cards.js'

const Header = () => {

  const header = "How good of an American are you? Test all of your civics knowledge here!"
  const headerArr = header.split(' ')

  return (
    <div>
      <header>
         <h1 data-text="The Ultimate US Civics Wizards">
          The Ultimate US Civics Wizards!
        </h1>
      </header>
        <div className="smoke" >
          <ul>
          {
              headerArr.map((char) => (
              <li key={char}> {char}</li>
            ))
          }
          </ul>
      
      </div>
      <h4 className="info">{`Number of cards: ${Cards.length}`}</h4>
    </div>
  );
};

export default Header;