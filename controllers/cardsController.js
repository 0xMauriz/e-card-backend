const connection = require("../data/cardsData.js");

// INDEX
function index(req, res) {
    const sql = "SELECT * FROM products"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({error: "database query failed"})
        res.json(results);
    })
}

// SHOW
function show(req, res) {
    const {id} = req.params

    const sql = "SELECT * FROM products WHERE id=?"

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({error: "database query failed"})
        if (results.length === 0) return res.status(404).json({error: "Page not found"})
        res.json(results[0]);
    })
}

// STORE
function store(req, res) {

    const { movie_id, name, vote, text } = req.body;

    console.log(req.body);


    const sql = 'INSERT INTO `reviews` ( movie_id, name, vote, text ) VALUES ( ?, ?, ?, ? )'

    connection.query(sql, [movie_id, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        res.status(201);
        console.log(results);
        res.json({ id: results.insertId });

    })


}


module.exports = { index, show, store, update, destroy }