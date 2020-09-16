const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = [];

app.get('/', (req, res) => {

    let day = date.getDate()

   res.render('list', {kindOfDay: day, newListItems:  items });
});


app.post('/',(req,res) => {
    var item = req.body.newItem;
    items.push(item)
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('Server Started')
}); 