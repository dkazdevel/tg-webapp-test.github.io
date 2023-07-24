import Products from "../../models/product.js";
import cancel from "../../../img/cancel.png";

class List  {
  constructor() {
    this.model = new Products();
  }

  async getData() {
      return new Promise(resolve => this.model.getProductsList().then(data => resolve(data)));
  }

  render(productsData) {
    console.log(productsData)
    return new Promise(resolve => {
      resolve(`
              ${this.getItemsHtml(productsData)}
                    `);
    });
  }

  afterRender(contactsData){
    this.setActions(contactsData);
  }

  setActions(contactsData) {
    }

  getItemsHtml(productsData) {
    const html = [];

     productsData.forEach((product, index) => {
      const isImgEsists = this.imageExists(product.img);
      console.log(isImgEsists);
      const imgUrl = isImgEsists ? product.img : cancel
      html.push(
      `
      <div class='item'>
        <img class="img" src=${imgUrl} alt="utem_img">
        <p>${product.name} - <span class="bold">${product.countPoints}</span></p>
        <button class="btn" id="btn${index}">Добавить</button>
      </div>
      `
      )
    })

    return html.join('')
  }

  imageExists(image_url){
    const http = new XMLHttpRequest();
    try{
      http.open('HEAD', image_url, false);
      http.send();
    }catch (e) {
      return false
    }

    return http.status != 404;
  }

}


export default List;
