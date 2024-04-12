 
    const Baseurl = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-04-12&' +
          'sortBy=popularity&' +
          'apiKey=80578b79a6554b3a88e42998ea4572f9';

const req = new Request(Baseurl);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })