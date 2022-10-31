import React from 'react';
import { useEffect, useState } from 'react';

const App = () => {
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

    fetchData();
  }, []);

  return (
    <div>
      <blockquote>{quote}</blockquote>
      <cite>- {character}</cite>
    </div>

  );
}

export default App;