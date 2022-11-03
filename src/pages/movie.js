import React from 'react';
import { useEffect, useState } from 'react';
  
const Movie = () => {
  const [data,setData]=useState();
  const [query, setQuery] = useState("")
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 9teFKbr4uHi4moGhA6-5'
  };
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
  },[])
    return (
      <div
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        
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
        
      </div>
    );
  };
  
export default Movie;