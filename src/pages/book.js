import React from 'react';
import { useEffect, useState } from 'react';
  
const Book = () => {
  const [book, setBook] = useState()
  const [chapter, setChapter] = useState();

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 9teFKbr4uHi4moGhA6-5'
    };
    const fetchData = async () => {
      try {
          
        const rawBooks = await fetch('https://the-one-api.dev/v2/book', {
        headers: headers
        });
        const books = await rawBooks.json();
        const book = books.docs[Math.floor(Math.random() * books.docs.length)];
        setBook(book.name);
        const rawChapters = await fetch('https://the-one-api.dev/v2/chapter?book=' + book._id, 
        { headers: headers });
        const chapters = await rawChapters.json();
        var output = "";
        for (let i = 0; i < chapters.docs.length; i++) {
          const chapter = chapters.docs[i];
          output += 'Chapter ' + (i+1) + " " + chapter.chapterName;
        }
        setChapter(<div>{output}</div>);
          
        
      } catch (error) {
        alert(error);
        
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        backgroundImage:'url("https://images.freecreatives.com/wp-content/uploads/2016/03/Old-taped-Book-Pages-Texture.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'Right',
        height: '100vh',
        
      }}
    >
      <div>
        <h1>{book}</h1>
        <div style={{
        fontFamily: '"Special Elite", cursive',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}  >{chapter}</div>
      </div>
    </div>
  );
};
  
export default Book;