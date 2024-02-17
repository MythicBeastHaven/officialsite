// Importar los módulos necesarios
const express = require('express');
const path = require('path');
const app = express();

// Definir la ruta para manejar la redirección de Twitch
app.get('/auth/twitch/callback', (req, res) => {
    const { code } = req.query;

    if (code) {
        // Si la autorización fue exitosa, guardar la información del usuario en la hoja de cálculo de Google Sheets
        // Aquí deberías incluir la lógica para guardar los datos en Google Sheets
        
        // Después de guardar los datos, redirige al usuario a su perfil
        res.redirect('/profile.html');
    } else {
        // Si la autorización falló, redirige al usuario de vuelta al índice con un mensaje de error
        res.redirect('/index.html?error=auth_failed');
    }
});

// Establecer el servidor para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
