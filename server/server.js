const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta de autorización de Twitch
app.get('/auth/twitch/callback', async (req, res) => {
    try {
        const { code } = req.query;

        // Intercambio de código de autorización por token de acceso
        const response = await axios.post('https://id.twitch.tv/oauth2/token', {
            client_id: '9mv1pwbxjq33qyftx2xlsu821bwmnd',
            code,
            grant_type: 'authorization_code',
            redirect_uri: 'https://sites.google.com/view/mbh-prueba/exec'
        });

        const { access_token } = response.data;

        // Obtener datos del usuario desde Twitch
        const userResponse = await
