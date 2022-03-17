const express = require('express');
const { Router } = require('express');
const { default: axios } = require('axios');
require('dotenv').config();

const router = Router();

router.get('/', async(req, res) => {    
    // Get SpaceFlightAPI articles route.
    const apiGetArticlesUrl = process.env.API_GET_ARTICLES;
    
    console.log('Endpoint /articles called.');

    // Get limit by query params.
    const { limit } = req.query;

    // Axios get articles with limit from SpaceFlightAPI.
    const { data } = await axios.get(`${apiGetArticlesUrl}?_limit=${limit}`);
    
    // Map data and return only required information (Title, Image, Url).
    const response = data.map(({ title, imageUrl, url }) => 
            ({ title, imageUrl, url }));
    
    // Return mapped data in response.
    res.send(response);
});

module.exports = router;