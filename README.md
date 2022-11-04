# TLOTR App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The website, retrieves some free data from  https://apilist.fun/. For example, a list
of (free) APIs is available on https://apilist.fun/. 
To add the key open headers.js  (path src\pages\headers.js) and paste the key to the Authorization field right after 'Bearer '
                      const headers = {
                          'Accept': 'application/json',
                          'Authorization': 'Bearer keyhere'
                        };

## Components

### Landing page
The landing page (home) generates a random quote that were said by a lord of the rings charcter, first a randemized quote is fetched then its id is used to link it to the charchter who the quote belongs too, a button "show me TLOTR quote" will redirect the user to the landing page and show new quote. if the user is already seeing a quote the button is neutral.

### TLOTR book
The book page fetches the lord of the rings books data and the chapters data then links them on id, in UI each book will have a show more tag that allows the use to see the chapters of each book.
### TLOTR charcters
The charcaters page retrevies the data about TLOTR charcters I have choosent to display the neam, the race, the gender and the birth. the feltering allows to filter the charcters according to the race (human, elf, hobbit...)
### About
As the idea of the App is all around The Lord Of The Rings tale, I added an about page that tells basic inforations about the book.


