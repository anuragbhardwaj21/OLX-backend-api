const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  postedAt: { type: Date, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
