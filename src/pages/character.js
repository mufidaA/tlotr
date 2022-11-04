import React from 'react';
import { useEffect, useState } from 'react';
import headers from './headers';
  
const Character = () => {
  const [data,setData]=useState();
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
  },[])
    return (
      <><div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
        }}
      >
      </div>
      <div id='discription'>
        <p>Welcome to the book of over 900 of the  epic high-fantasy series, 
        Type a race in the search to learn about all characters who belong to that race</p>
        <input onChange={event => setQuery(event.target.value)} placeholder="Enter a TLOTR race" />
      </div>
        <div id='charContainer'>
          {data && data.filter(item => {
            if (query === '') {
              return item;
            } else if (item.race.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          }).map((item, index) => <>
          <div id='charitems' key={index}>
              <p>Name: {item.name}</p>
              <p key={index}>Race: {item.race}</p>
              <p key={index}>Gender: {item.gender}</p>
              <p key={index}>Birth: {item.birth}</p>
          </div>
          </>)}
        </div></>
    );
  };
  
export default Character;