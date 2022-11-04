import React from 'react';
import { useEffect, useState } from 'react';
import './index.css';
import headers from './headers';
import media1 from './NicePng_lord-of-the-rings_8443340.png';
  
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

    fetchData();
  }, []);

  return (
    <><div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <blockquote>{quote}</blockquote>
        <cite>- {character}</cite>
      </div>

    </div>
    <img src={media1} alt="media"  style={{
      width: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      position: 'fixed',
      bottom: '0',
    }} /></>
  );
};
  
export default Home;
