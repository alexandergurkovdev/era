import IMask from 'imask';

// маска для телефонов
document.querySelectorAll('.phone').forEach(function (item) {
  IMask(item, {
    mask: '+{7} (000) 000-00-00',
  });
});
