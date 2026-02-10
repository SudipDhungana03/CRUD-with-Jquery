function createForm(editId, itemToEdit) {
  var $form = $("<form></form>");

  $form.html(`
    <h2>grocery bud</h2>
    <div class="form-control">
      <input type="text" class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `);

  $form.on("submit", function (e) {
    e.preventDefault();
    var value = $.trim($form.find(".form-input").val());

    if (!value) {
      alert("Please enter a value");
      return;
    }

    editId ? updateItemName(value) : addItem(value);
  });

  return $form;
}
