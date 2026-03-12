INSERT INTO `products` (`slug`, `title`, `description`, `price`, `image`, `is_featured`) VALUES

('pikachu-vmax', 'Pikachu VMAX', 'Electric-type Pokémon card featuring Pikachu in its Gigantamax form.', 24.99, 'https://images.pokemontcg.io/swsh4/44_hires.png', 1),

('charizard-vivid-voltage', 'Charizard', 'Fire-type Pokémon card from the Vivid Voltage set known for powerful attacks.', 79.99, 'https://images.pokemontcg.io/swsh4/25_hires.png', 1),

('venusaur-ex', 'Venusaur EX', 'Grass-type Pokémon card capable of strong poison and healing abilities.', 18.50, 'https://images.pokemontcg.io/xy1/1_hires.png', 0),

('blastoise-ex', 'Blastoise EX', 'Water-type Pokémon card featuring powerful hydro cannon attacks.', 22.75, 'https://images.pokemontcg.io/xy1/30_hires.png', 0),

('mewtwo-gx', 'Mewtwo GX', 'Psychic-type legendary Pokémon card with devastating psychic attacks.', 35.90, 'https://images.pokemontcg.io/sm3/78_hires.png', 1),

('lucario-v', 'Lucario V', 'Fighting-type Pokémon card known for aura-based combat abilities.', 14.20, 'https://images.pokemontcg.io/swsh3/27_hires.png', 0),

('gengar-vmax', 'Gengar VMAX', 'Ghost-type Pokémon card with powerful dark and shadow attacks.', 41.60, 'https://images.pokemontcg.io/swsh8/157_hires.png', 1),

('dragonite-v', 'Dragonite V', 'Dragon-type Pokémon card known for high HP and strong flying attacks.', 19.80, 'https://images.pokemontcg.io/swsh7/192_hires.png', 0),

('alakazam-ex', 'Alakazam EX', 'Psychic-type Pokémon card known for powerful mind attacks.', 21.40, 'https://images.pokemontcg.io/xy/125_hires.png', 0),

('snorlax-v', 'Snorlax V', 'Normal-type Pokémon card with massive HP and heavy attacks.', 16.30, 'https://images.pokemontcg.io/swsh1/141_hires.png', 0),

('gyarados-ex', 'Gyarados EX', 'Water-type Pokémon card with devastating rage attacks.', 27.50, 'https://images.pokemontcg.io/xy9/27_hires.png', 1),

('machamp-v', 'Machamp V', 'Fighting-type Pokémon card famous for its overwhelming strength.', 18.90, 'https://images.pokemontcg.io/swsh10/72_hires.png', 0),

('umbreon-vmax', 'Umbreon VMAX', 'Dark-type Pokémon card known for shadow abilities.', 52.70, 'https://images.pokemontcg.io/swsh7/95_hires.png', 1),

('espeon-v', 'Espeon V', 'Psychic-type Pokémon card that uses elegant psychic attacks.', 23.10, 'https://images.pokemontcg.io/swsh7/64_hires.png', 0),

('rayquaza-vmax', 'Rayquaza VMAX', 'Legendary dragon Pokémon card with sky-high power.', 63.40, 'https://images.pokemontcg.io/swsh7/111_hires.png', 1),

('greninja-gx', 'Greninja GX', 'Water-type ninja Pokémon card with fast attacks.', 29.50, 'https://images.pokemontcg.io/sm1/24_hires.png', 0),

('lugia-v', 'Lugia V', 'Legendary psychic flying Pokémon card with powerful abilities.', 34.80, 'https://images.pokemontcg.io/swsh12/138_hires.png', 1),

('ho-oh-gx', 'Ho-Oh GX', 'Legendary fire Pokémon card representing rebirth and flames.', 28.60, 'https://images.pokemontcg.io/sm3/21_hires.png', 0),

('tyranitar-v', 'Tyranitar V', 'Rock and dark Pokémon card with destructive attacks.', 22.30, 'https://images.pokemontcg.io/swsh5/97_hires.png', 0),

('metagross-v', 'Metagross V', 'Steel psychic Pokémon card with heavy metal attacks.', 19.40, 'https://images.pokemontcg.io/swsh4/118_hires.png', 0),

('sylveon-vmax', 'Sylveon VMAX', 'Fairy Pokémon card known for elegant ribbon attacks.', 47.20, 'https://images.pokemontcg.io/swsh7/75_hires.png', 1),

('darkrai-gx', 'Darkrai GX', 'Dark-type legendary Pokémon card with nightmare abilities.', 33.60, 'https://images.pokemontcg.io/sm3/88_hires.png', 0),

('zapdos-v', 'Zapdos V', 'Legendary electric bird Pokémon card with lightning attacks.', 25.70, 'https://images.pokemontcg.io/swsh6/48_hires.png', 0),

('articuno-gx', 'Articuno GX', 'Legendary ice bird Pokémon card with freezing powers.', 24.10, 'https://images.pokemontcg.io/sm10/31_hires.png', 0),

('moltres-v', 'Moltres V', 'Legendary fire bird Pokémon card surrounded by flames.', 26.90, 'https://images.pokemontcg.io/swsh6/21_hires.png', 0);

INSERT INTO `conditions` (`product_id`, `condition`)

VALUES (1, 'New'), (2, 'New'),(3, 'New'),(4, 'Used'),(5, 'Used'), (6, 'New'), (7, 'New'), (8, 'Used'), (9,'New'),(10,'New'),(11,'Used'),(12,'New'),(13,'New'),
(14,'Used'),(15,'New'),(16,'Used'),(17,'New'),(18,'New'), (19,'Used'),(20,'New'),(21,'New'),(22,'Used'),(23,'New'), (24,'Used'),(25,'New');

INSERT INTO `game_type` (`product_id`, `type`)

VALUES (1, 'Carta Pokèmon'), (2, 'Carta Pokèmon'),(3, 'Carta Pokèmon'),(4, 'Carta Pokèmon'),(5, 'Carta Pokèmon'), (6, 'Carta Pokèmon'), (7, 'Carta Pokèmon'),
(8, 'Carta Pokèmon'), (9,'Carta Pokèmon'), (10,'Carta Pokèmon'), (11,'Carta Pokèmon'), (12,'Carta Pokèmon'),(13,'Carta Pokèmon'),(14,'Carta Pokèmon'), (15,'Carta Pokèmon'),
(16,'Carta Pokèmon'), (17,'Carta Pokèmon'), (18,'Carta Pokèmon'), (19,'Carta Pokèmon'),(20,'Carta Pokèmon'), (21,'Carta Pokèmon'),(22,'Carta Pokèmon'),(23,'Carta Pokèmon'),
(24,'Carta Pokèmon'), (25,'Carta Pokèmon');

INSERT INTO `game_rarity` (`product_id`, `rarity`)

VALUES(1, 'Ultra Rare'), (2, 'Rare'), (3, 'Ultra Rare'), (4, 'Ultra Rare'), (5, 'Secret Rare'), (6, 'Rare'), (7, 'Ultra Rare'),
(8, 'Rare'), (9,'Rare'), (10,'Rare'), (11,'Ultra Rare'), (12,'Rare'), (13,'Secret Rare'), (14,'Rare'), (15,'Ultra Rare'), (16,'Rare'),
(17,'Ultra Rare'), (18,'Rare'), (19,'Rare'), (20,'Rare'), (21,'Ultra Rare'), (22,'Rare'), (23,'Rare'), (24,'Rare'), (25,'Rare');