import React from 'react';
import { useEffect, useState } from 'react';
  
const Home = () => {
  const [quote, setQuote] = useState()
  const [character, setCharacter] = useState();

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 9teFKbr4uHi4moGhA6-5'
    };
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
      <div
      style={{
        fontFamily: '"Special Elite", cursive',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}  
      >
        <blockquote
        style={
          {
              fontWeight: '100',
              fontSize: '2rem',
              maxWidth: '600px',
              lineheight: '1.4',
              position: 'relative',
              margin: '0',
              padding: '.5rem',
            
          }
        }
        >“{quote}”</blockquote>
        <cite
          style={
            {
              lineHeight: '3',
              textAlign: 'left'
            }}
        >- {character}</cite>
      </div>
      
    </div>
  );
};
  
export default Home;
