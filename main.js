const algoliasearch = require('algoliasearch');

const client = algoliasearch('3U93ZMMAED', 'f88b863d0142dda0db990e774f4342cd');

const index = client.initIndex('safis_store');

const products = require('./data/products.json');

const SALE_CATEGORY = 'Camera';

const reducePrices = () => {
  const discountedProducts = products.map((product) => {
    const isCategorySale = product.categories.find((category) =>
      category.includes(SALE_CATEGORY)
    );
    if (isCategorySale) {
      return {
        ...product,
        price: Math.round(product.price - product.price * 0.2),
      };
    }
    return product;
  });

  index
    .partialUpdateObjects(discountedProducts, { createIfNotExists: true })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((e) => {
      console.log('error:', e);
    });
};

reducePrices();
