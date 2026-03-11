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

    const sql = "SELECT * FROM products LEFT JOIN conditions ON products.id = conditions.product_id LEFT JOIN game_type ON products.id = game_type.product_id LEFT JOIN game_rarity ON products.id = game_rarity.product_id WHERE products.slug = ?"

    connection.query(sql, [productSlug], (err, results) => {
        if (err) return res.status(500).json({ error: "database query failed" })
        if (results.length === 0) return res.status(404).json({ error: "Page not found" })
        res.json(results[0]);
    })

}

// Store

function orderStore(req, res) {

    // Query per inserire un order

    const { orderSlug, customerName, customerSurname, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice } = req.body;

    const sqlOrder = 'INSERT INTO `orders` ( slug, customer_name, customer_surname, customer_mail, phone, street_name, street_name_billing, city, city_billing, postal_code, postal_code_billing, province, province_billing, country, country_billing, subtotal, shipping_cost, total_price) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )'

    connection.query(sqlOrder, [orderSlug, customerName, customerSurname, customerMail, phone, streetName, streetNameBilling, city, cityBilling, postalCode, postalCodeBilling, province, provinceBilling, country, countryBilling, subtotal, shippingCost, totalPrice], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.status(201).json({ id: results.insertId, message: "Products created successfully" })
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


module.exports = { index, show, orderStore, update, destroy }
