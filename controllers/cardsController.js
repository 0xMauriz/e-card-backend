const connection = require("../data/cardsData.js");

// INDEX
function index(req, res) {
    const sql = "SELECT * FROM `products`"

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

    // Query per inserire un order

    const { customerName, customerSurame, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice } = req.body;

    const sqlOrder = 'INSERT INTO `orders` (customer_name, customer_surname, customer_mail, phone, street_name, street_name_billing, city, city_billing, postal_code, postal_code_billing, province, province_billing, country, country_billing, subtotal, shipping_cost, total_price) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )'

    connection.query(sqlOrder, [customerName, customerSurame, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" })
    })

    // Query per inserire prodotto


    const { productSlug, name, description, price, image, isFeatured, gameTypeProductId, gameTypeSlug, gameTypeName, rarityProductId, raritySlug, rarityName, conditionsProductId, conditionsSlug, conditionsName } = req.body;

    const sqlProduct = 'INSERT INTO `products` (slug, name, description, price, image, is_featured) VALUES ( ?, ?, ?, ?, ?, ? )'

    connection.query(sqlProduct, [productSlug, name, description, price, image, isFeatured], (err, results) => {

        if (err) return res.status(500).json({ error: "database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" });

    })

    // Query per inserire le condizioni dell'oggetto

    const sqlConditions = 'INSERT INTO `conditions` (product_id, slug, name) VALUES ( ?, ?, ?)'

    connection.query(sqlConditions, [conditionsProductId, conditionsSlug, conditionsName], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Condition created succesfully" })
    })

    // Query per inserire il nome del gioco di carte collezionabili a cui la carta appartiene

    const sqlGameType = 'INSERT INTO `game_type` ( product_id, slug, name) VALUES ( ?, ?, ?)'

    connection.query(sqlGameType, [gameTypeProductId, gameTypeSlug, gameTypeName], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Condition created succesfully" })
    })

    // Query per inserire la rarità della carta

    const sqlRarity = 'INSERT INTO `rarity` ( product_id, slug, name) VALUES ( ?, ?, ?)'

    connection.query(sqlRarity, [rarityProductId, raritySlug, rarityName], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Condition created succesfully" })
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
