import React from 'react';
import { useEffect, useState } from 'react';

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
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 9teFKbr4uHi4moGhA6-5'
  };
  var combine = () => {
    if (data.bo.docs.id === undefined) {
      return "empty";
    }
    for (var i = 0; i < data.ch.lenght; i++) {
      if (data.ch.docs[i]._id === data.bo.docs._id) {
        return "test" + data.ch.docs[i].chapterName;
      }
    }
    return "Empty!";
  };
  const getData = async () => {
      fetch('https://the-one-api.dev/v2/book', {
        headers: headers
        })
        .then( async function(response) {
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
     // getData()
    },[])

    return (
      <div
        style={{
          backgroundImage: 'url("https://images.freecreatives.com/wp-content/uploads/2016/03/Old-taped-Book-Pages-Texture.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'Right',
          height: '100vh',
        }}>
          <div className="App">
          {data && data.bo.docs.map((item) => 
              <div key={item._id}> {item.name} 
              <ReadMore>dgfgdfvsdcdfvfb {combine(item._id)}</ReadMore></div>
          ) 
          }
          </div>
      </div>
      
    );
  
  
}
  
export default Book;