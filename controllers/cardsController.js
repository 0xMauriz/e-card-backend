const connection = require("../data/cardsData.js");

// INDEX
function index(req, res) {
    const sql = "SELECT * FROM products"

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        res.json(results);
    })
}

// SHOW
function show(req, res) {
    const { id } = req.params

    const sql = "SELECT * FROM products WHERE id=?"

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        if (results.length === 0) return res.status(404).json({ error: "Page not found" })
        res.json(results[0]);
    })
}

// STORE di products
function store(req, res) {

    const { productSlug, name, description, price, image, isFeatured, gameTypeSlug, gameTypeName, raritySlug, rarityName, conditionSlug, conditionName } = req.body;

    const sql = 'INSERT INTO `products` (name, slug, description, price, image, is_featured) VALUES ( ?, ?, ?, ?, ?, ? )'

    connection.query(sql, [name, slug, description, price, image, is_featured], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" });
    })
}

// UPDATE di products
function update(req, res) {
    const { id } = req.params

    const { name, slug, description, price, image, is_featured } = req.body;

    const sql = `UPDATE products 
                SET name = ?, slug = ?, description = ?, price = ?, image = ?, is_featured = ? 
                WHERE id = ?`;

    connection.query(sql, [name, slug, description, price, image, is_featured, id], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        if (results.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
        res.json({ updated: results.affectedRows, message: "Products updated successfully" });
    })
}

// DESTROY
function destroy(req, res) {
    const { id } = req.params

    const sql = `DELETE FROM products WHERE id = ?`

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: "database query failed" });
        res.sendStatus(204)
    });
}


module.exports = { index, show, store, update, destroy }
