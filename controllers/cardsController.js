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

// STORE di products
function store(req, res) {
    const {name, slug, description, price, image, is_featured, create_at, updated_at} = req.body;

    const sql = 'INSERT INTO `products` (name, slug, description, price, image, is_featured, create_at, updated_at) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )'

    connection.query(sql, [name, slug, description, price, image, is_featured, create_at, updated_at], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully"});
    })
}


module.exports = { index, show, store, update, destroy }