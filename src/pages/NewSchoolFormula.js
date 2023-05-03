const columns = document.querySelectorAll('ul');
columns.forEach((column) => {
  let maxHeight = 0;
  column.querySelectorAll('li').forEach((item) => {
    if (item.offsetHeight > maxHeight) {
      maxHeight = item.offsetHeight;
    }
  });
  column.querySelectorAll('li').forEach((item) => {
    item.style.height = `${maxHeight}px`;
  });
});
