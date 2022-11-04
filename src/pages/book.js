import React from 'react';
import { useEffect, useState } from 'react';
import headers from './headers';


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0,0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "..click to see book chapters" : " show less"}
      </span>
    </p>
  );
};

const Book = () => {
  const [data,setData]=useState();

  const combine = (bid, data) => {
    var arr=[];
    for (var i = 0; i < data.ch.docs.length; i++) {
      if (data.ch.docs[i].book === bid) {
        arr.push(data.ch.docs[i].chapterName);
      }
    }
    return arr;
  };

  const getData = async () => {
      fetch('https://the-one-api.dev/v2/book', {
        headers: headers
        })
        .then(async function(response) {
          console.log(response)
          const rawChapters = await fetch('https://the-one-api.dev/v2/chapter',/*?book=' + books._id,*/ {
            headers: headers
            })
          const chapters = await rawChapters.json();
          const books = await response.json();
          var mergedObj = { ch: chapters, bo: books };
          return mergedObj;
        }).then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    return(
      <div
        style={{

          display: 'flex',
        
        }}>
          <div id='book'>
          {data && data.bo.docs.map((item) => 
              <div key={item._id}> {item.name} 
              <ReadMore> - {combine(item._id,data).map((chapName, index) => <span> {index+1}. {chapName} </span> )}</ReadMore></div>
          ) 
          }
          </div>
      </div>
      
    );
  
  
}
  
export default Book;