import '../styles/style.css';
import List from './views/pages/list';

function router() {
  const contentContainer = document.getElementsByClassName('content-container__inner')[0];
  const page = new List()
    page.getData().then(data => {
      page.render(data).then(html => {
        contentContainer.innerHTML = html;
        page.afterRender(data);
      });
    });
}

module.hot ? module.hot.accept(router()) : window.addEventListener('load', router);