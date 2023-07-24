class Products {

  async getProductsList() {
    let response = await fetch('http://localhost:3000/bonus-product/');
    let data = await response.json();

    return data;
  }

}

export default Products;
