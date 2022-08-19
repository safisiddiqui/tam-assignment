const resultHit = (hit, bindEvent) => `<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit.name}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button  ${bindEvent(
      'click',
      hit,
      'Item Viewed'
    )} id="view-item" class="result-hit__view">View</button>
    <button type="button" ${bindEvent(
      'click',
      hit,
      'Product Added'
    )} id="add-to-cart" class="result-hit__cart">Add To Cart</button>
  </div>  
</a>`;

export default resultHit;
