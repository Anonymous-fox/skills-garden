function createList(url) {
  loadData(url)
  .then(resolve => {
    let ol = createObjectsListElem(Object.values(resolve)[0]);
    let parent = document.getElementById('objects-list');
    parent.insertAdjacentElement('afterbegin', ol);
  })
  .catch(error => console.log(`ERROR: ${error}`));
}
  
async function loadData(url) {
  let response = await fetch(url);
  let fields = await response.json();
  return fields;
}

function createObjectsListElem(objectsList) {
  let ul = document.createElement('ul');
  let list = "";
  objectsList.forEach((item, index, array) => {
    list += `<li><a href="${item.url}"><button class="object-button button">${item.name}</button></a></li>`;
  });
  ul.innerHTML = list;
  return ul
}