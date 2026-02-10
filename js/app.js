function getLocalStorage() {
  return JSON.parse(localStorage.getItem("grocery-list")) || [];
}

function setLocalStorage(items) {
  localStorage.setItem("grocery-list", JSON.stringify(items));
}

var items = getLocalStorage();
var editId = null;

function generateId() {
  return Date.now().toString(36);
}

function render() {
  $("#app").empty();

  var itemToEdit = editId
    ? items.find((i) => i.id === editId)
    : null;

  $("#app").append(createForm(editId, itemToEdit));
  $("#app").append(createItems(items));
}

function addItem(name) {
  items.push({ id: generateId(), name, completed: false });
  setLocalStorage(items);
  render();
}

function editCompleted(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, completed: !item.completed } : item
  );
  setLocalStorage(items);
  render();
}

function removeItem(id) {
  items = items.filter((item) => item.id !== id);
  setLocalStorage(items);
  render();
}

function updateItemName(name) {
  items = items.map((item) =>
    item.id === editId ? { ...item, name } : item
  );
  editId = null;
  setLocalStorage(items);
  render();
}

function setEditId(id) {
  editId = id;
  render();
  setTimeout(() => $(".form-input").focus(), 0);
}

$(document).ready(render);

