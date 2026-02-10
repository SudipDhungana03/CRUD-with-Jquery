function createItems(itemsArray) {
  var $container = $('<div class="items"></div>');

  $.each(itemsArray, function (_, item) {
    $container.append(createSingleItem(item));
  });

  return $container;
}

