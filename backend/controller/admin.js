const Item = require('../model/item');

exports.addItem = async (req, res, next) => {
    try{
        const item_name = req.body.Candy;
        const description = req.body.Description;
        const price = req.body.Price;
        const quantity = req.body.Quantity;
    
        const data = await Item.create ({item_name : item_name, item_description : description, quantity : quantity, price : price});
        res.status(201).json({newItemDetail : data});
      } catch(err) {
        res.status(500).json({
          error : err
        })
    }
}

exports.getItems = async (req, res, next) => {
    try{
        const items = await Item.findAll();
        res.status(201).json({allItems : items});
      } catch(err) {
        res.status(500).json({
          error : err
        })
    }
}

exports.putItem = async (req, res, next) => {
    try {
      const { item_name, item_description, quantity, price } = req.body;
      const { id } = req.params; // Log the `id` parameter to debug
      console.log('ID:', id);
      const [numRowsUpdated, updatedItem] = await Item.update(
        { item_name, item_description, quantity, price },
        { where: { id } }
      );
      if (numRowsUpdated === 0) {
        // If no rows were updated, return a 404 Not Found response
        res.sendStatus(404);
      } else {
        // Otherwise, return a 204 No Content response
        res.sendStatus(204);
      }
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };