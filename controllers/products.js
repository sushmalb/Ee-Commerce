const Product = require("../Models/Product.model.js");

exports.products = async (req, res) => {
  // USING ASYNC AWAIT
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }

  // 1.const name = req.body.name;
  // const price = req.body.price;

  // res.json({
  //   sucess: true,
  //   name: name,
  //   price: price,
  // });
  // console.log(req.body);

  //2. USING  PROMISE
  // const product = new Product({
  //   name: req.body.name,
  //   price: req.body.price,
  // });
  // product
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.send(result);
  //   })
  //   .catch((err) => console.log(err));
};

//////  TO GET ALL PRODUCTS ////////////

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({}, { __v: 0 });
    res.send(allProducts);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id, { __v: 0 });
    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    res.send(product);
  } catch (error) {
    log.error(error);
  }
};

exports.updateByID = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const product = Products.findByIdAndUpdate(id, updates);
    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
};
