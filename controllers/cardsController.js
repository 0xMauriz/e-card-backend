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

    const { productSlug } = req.params

    const sql = "SELECT * FROM products LEFT JOIN order_product ON products.id = order_product.product_id LEFT JOIN orders ON orders.id = order_product.order_id LEFT JOIN conditions ON products.id = conditions.product_id LEFT JOIN game_type ON products.id = game_type.product_id LEFT JOIN rarity ON products.id = rarity.product_id WHERE products.slug = ?"

    connection.query(sql, [productSlug], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        if (results.length === 0) return res.status(404).json({ error: "Page not found" })
        res.json(results[0]);
    })
}

// Store

function productStore(req, res) {

    // Query per inserire prodotto


    const { productSlug, name, description, price, image, isFeatured } = req.body;

    const sqlProduct = 'INSERT INTO products (slug, name, description, price, image, is_featured) VALUES ( ?, ?, ?, ?, ?, ? )'

    connection.query(sqlProduct, [productSlug, name, description, price, image, isFeatured], (err, results) => {

        if (err) return res.status(500).json({ error: "database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" });

    })



}

function orderStore(req, res) {

    // Query per inserire un order

    const { orderSlug, customerName, customerSurname, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice } = req.body;

    const sqlOrder = 'INSERT INTO `orders` ( slug, customer_name, customer_surname, customer_mail, phone, street_name, street_name_billing, city, city_billing, postal_code, postal_code_billing, province, province_billing, country, country_billing, subtotal, shipping_cost, total_price) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )'

    connection.query(sqlOrder, [orderSlug, customerName, customerSurname, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" })
    })

}

function conditionsStore(req, res) {

    const { conditionsProductId, conditionsName } = req.body;

    // Query per inserire le condizioni dell'oggetto

    const sqlConditions = 'INSERT INTO `conditions` (product_id, name) VALUES ( ?, ?)'

    connection.query(sqlConditions, [conditionsProductId, conditionsName], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Condition created succesfully" })
    })

}

function gameTypeStore(req, res) {

    const { gameTypeProductId, gameTypeName } = req.body;

    // Query per inserire il nome del gioco di carte collezionabili a cui la carta appartiene

    const sqlGameType = 'INSERT INTO `game_type` ( product_id, name) VALUES ( ?, ?)'

    connection.query(sqlGameType, [gameTypeProductId, gameTypeName], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Condition created succesfully" })
    })
}

function rarityStore(req, res) {

    const { rarityProductId, rarityName } = req.body;

    // Query per inserire la rarità della carta

    const sqlRarity = 'INSERT INTO `rarity` ( product_id, name) VALUES ( ?, ?)'

    connection.query(sqlRarity, [rarityProductId, rarityName], (err, results) => {
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


module.exports = { index, show, productStore, orderStore, conditionsStore, gameTypeStore, rarityStore, update, destroy }
