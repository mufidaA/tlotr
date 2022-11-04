import React from 'react';
//import { useEffect, useState } from 'react';
//import headers from './headers';
import media from './One_Ring_inscription.svg';
const About = () => {
 
  /*const [data,setData]=useState();
  const [query, setQuery] = useState("")
  
  const getData = async () => {
    await fetch('https://the-one-api.dev/v2/character', {
      headers: headers
      })
      .then( async function(response) {
        console.log(response)
        return response.json();
      }).then(function(myJson) {
        console.log(myJson.docs);
        setData(myJson.docs)
      });
  }
  useEffect(()=>{
   getData()
  },[])*/
    return (
      <><div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
        }}

      >
      </div>
      <div id='about'>
        
            <h2>The Lord of the Rings</h2>
            <span>From Wikipedia</span>
            <p>The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some time in the distant past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.
            The title refers to the story's main antagonist, the Dark Lord Sauron, who, in an earlier age, created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.
            Although often called a trilogy, the work was intended by Tolkien to be one volume of a two-volume set along with The Silmarillion. For economic reasons, The Lord of the Rings was published over the course of a year from 29 July 1954 to 20 October 1955 in three volumes titled The Fellowship of the Ring, The Two Towers, and The Return of the King. The work is divided internally into six books, two per volume, with several appendices of background material. Some later editions print the entire work in a single volume, following the author's original intent.
            Tolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.
            The Lord of the Rings has since been reprinted many times and translated into at least 38 languages.Its enduring popularity has led to numerous references in popular culture, the founding of many societies by fans of Tolkien's works,and the publication of many books about Tolkien and his works. It has inspired many derivative works, including paintings, music, films, television, video games, and board games. It has helped to create and shape the modern fantasy genre, within which it is considered one of the greatest books of all time.
            Award-winning adaptations of The Lord of the Rings have been made for radio, theatre, and film. It has been named Britain's best-loved novel of all time in the BBC's 2003 poll The Big Read.</p>
            <div>
              <img src={media} alt="media" />
              <h3>Why The Lord OF The Rings is intersting? </h3>
              <p>The Tale of Kullervo was the main isperaration for TLOTR author, one of the main stories of The Kalevala, which 
                has also inspired many other writers including Shakespeare. Tolkien was first 
                introduced to the story when he read a translation of the book during his schooldays,  
                describing it as ‘wild’ and ‘primitive,’ and different from all other European epics. 
                This gave him a desire to read the original version, so he borrowed some Finnish grammar books to teach himself the language. He even admitted that he found Finnish difficult to learn, and this was 
                coming from a man who could recite The Lord’s Prayer in Gothic!</p>
            </div>
      </div></>
    );
  };
  
export default About;
   /*
        <div><input onChange={event => setQuery(event.target.value)} placeholder="Enter Post Title"/></div>

          <div>
            {data  && data.slice(0, 20).filter(item => {
                      if (query === '') {
                        return item;
                      } else if (item.race.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                      }
                    }).map((item, index) => 
              <><div key={item._id}>Name: {item.name}</div><div key={index}>Race: {item.race}</div></>)}
          </div>
        */