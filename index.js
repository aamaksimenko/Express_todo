const express = require('express')
const cookieParser = require('cookie-parser');

const indexRouter = require('./src/routes/index');
const todosRouter = require('./src/routes/todos');

const PORT = process.env.PORT || 8080;

const app = express();


app.get('/', (req, res) => {
  res.send({message: 'welcome'});
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.listen(PORT, () => console.log(`start on PORT: ${PORT}`));
