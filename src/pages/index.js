import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';
import headers from './headers';
  
const Home = () => {
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();

  useEffect(() => {
    
    const fetchData = async () => {
      try {
          
        const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
        });
        const quotes = await rawQuotes.json();
        const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        setQuote(quote.dialog);
        const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, 
        { headers: headers });
        const characters = await rawCharacters.json();
        const character = characters.docs[0];
        setCharacter(character.name);
        
      } catch (error) {
        alert(error);
        
      }
    };

    //fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage:'url("https://media.pocketgamer.com/artwork/na-31596-1629889121/Lord-Of-The-Rings-Rise-To-War-One-Ring.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        height: '100vh'
      }}
    >
      <div>
        <blockquote>{quote}</blockquote>
        <cite>- {character}</cite>
      </div>
      
    </div>
  );
};
  
export default Home;
