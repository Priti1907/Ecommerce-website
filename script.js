// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.header1 input');
    const items = document.querySelectorAll('.cartitems');
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
  
      items.forEach(item => {
        const title = item.querySelector('.text h4').textContent.toLowerCase();
        const description = item.querySelector('.text h5').textContent.toLowerCase();
  
        if (title.includes(query) || description.includes(query)) {
          item.style.display = 'flex'; 
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  
  