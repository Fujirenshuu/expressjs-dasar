const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  axios.get('https://api.gogoanime.cloud/api/v1/recently_added?page=1&limit=10')
    .then(response => {
      const data = response.data.data;
      res.render('index', { animeList: data, currentPage: 1 });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  axios.get(`https://api.gogoanime.cloud/api/v1/search?search_term=${searchTerm}`)
    .then(response => {
      const data = response.data.data;
      res.render('search', { animeList: data });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

app.get('/anime/:page', (req, res) => {
  const page = req.params.page;
  axios.get(`https://api.gogoanime.cloud/api/v1/recently_added?page=${page}&limit=10`)
    .then(response => {
      const data = response.data.data;
      res.render('index', { animeList: data, currentPage: page });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
