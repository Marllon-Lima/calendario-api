const express = require('express');
const app = express();
app.use(express.json());

// Array em memória com alguns dias cadastrados
let calendar = [
    {
        id: "dataeventopositivo",
        date: '2025-04-15',
    },
    {
        id: "dataeventonegativo",
        date: '2025-04-15',
    },
    {
        id: "dataeventoneutro",
        date: '2025-04-15',
    },
    {
        id: "dataeventofestival",
        date: '2025-04-15',
    }
];

// GET /calendar - Lista todos os dias
app.get('/calendar', (req, res) => {
    res.json(calendar);
});

// GET /calendar/id/:id - Busca uma data específica pelo ID 
app.get('/calendar/id/:id', (req, res) => {
    const id = req.params.id;
    const day = calendar.find(d => d.id === id);
  
    if (!day) {
      return res.status(404).json({ message: 'Data com esse ID não foi encontrada' });
    }
  
    res.json(day);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('📅 API de calendário rodando em http://localhost:3000');
});
