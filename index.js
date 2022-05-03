var express = require('express');
var app = express();
var port = 3000;

const movies = {
    movie1: ` Interstellar `,
    movie2: ` Inception `,
    movie3: ` Tenet `,
    movie4: ` This Is the End `,
    movie5: ` Ben-Hur 1959 `,
    movie6: ` Pan's Labyrinth `,
    movie7: ` LOTR `,
    movie8: ` Star Wars `,
    movie9: ` Get-Out `,
    movie10: ` Wall-E `,
};

app.use(express.static('public'));

app.get('/:key', (req, res) => {
    res.send(movies([req.params.key]));
});

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
});