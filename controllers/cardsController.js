const connection = require("../data/cardsData.js");

// INDEX
function index(req, res) {
    const sql = "SELECT * FROM cardcommerce_db WHERE id=?"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({error: "database query failed"})
        res.json(results);
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