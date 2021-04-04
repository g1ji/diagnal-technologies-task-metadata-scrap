# diagnal-technologies-task-metadata-scrap
  Diagnal technologies task by g1ji


# Usage

  1.Clone this repository<br/>
  2.Open a command prompt and change directory to your project directory
  3.Install node packages by 'npm install'<br/>
  4.Run the app by typing npm start<br/>
  6.Go to http://localhost:3000 from your browser<br/>

# Sample request to scrap data
    curl --location --request POST 'http://localhost:3000/scrap' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "url": "https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSMNRN"
      }'


# Sample response
    {
    "contentType": "text/html;charset=UTF-8",
    "author": null,
    "date": "2021-06-11T06:30:00.000Z",
    "description": null,
    "image": "//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:146-7563290-9244969:776HEP6QCWFE5NKFDZE3$uedata=s:%2Frd%2Fuedata%3Fstaticb%26id%3D776HEP6QCWFE5NKFDZE3:0",
    "publisher": null,
    "title": "Amazon.com: Apple iPhone 11 (128GB) - Purple (SIM-Free)",
    "url": null,
    "favicon": null
    }
  
**Make sure you already installed node js on your machine.(type "node -v" in your command prompt).
