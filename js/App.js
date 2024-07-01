document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Formulaire soumis !');
});
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
      // Remove active class from all articles
      document.querySelectorAll('.page article').forEach(article => {
          article.classList.remove('active');
      });

      // Get the page name from the clicked link
      const page = this.getAttribute('data-page');

      // Add active class to the corresponding article
      document.querySelector(`.page article[data-page="${page}"]`).classList.add('active');
  });
});

document.querySelectorAll('.filter-list button').forEach(button => {
  button.addEventListener('click', function() {
      const category = this.innerText.toLowerCase();
      
      document.querySelectorAll('.filter-list button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      document.querySelectorAll('.project-item').forEach(item => {
          if (category === 'all' || item.dataset.category.toLowerCase() === category) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  });
});

document.querySelector('.filter-select').addEventListener('click', () => {
  document.querySelector('.select-list').classList.toggle('active');
});

document.querySelectorAll('.select-item button').forEach(button => {
  button.addEventListener('click', function() {
      const category = this.innerText.toLowerCase();
      document.querySelector('.select-value').innerText = this.innerText;
      
      document.querySelector('.select-list').classList.remove('active');
      
      document.querySelectorAll('.project-item').forEach(item => {
          if (category === 'all' || item.dataset.category.toLowerCase() === category) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  });
});


document.querySelectorAll('.select-item button').forEach(button => {
  button.addEventListener('click', function() {
      const category = this.innerText.toLowerCase();
      document.querySelector('.select-value').innerText = this.innerText;
      
      document.querySelector('.select-list').classList.remove('active');
      
      document.querySelectorAll('.skills-item').forEach(item => {
          if (category === 'all' || item.dataset.category.toLowerCase() === category) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const skillItems = document.querySelectorAll('[data-filter-item]');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-filter-btn');
          
          skillItems.forEach(item => {
              item.classList.toggle('active', item.getAttribute('data-category') === category);
          });
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');
  const selectButton = document.querySelector('[data-select]');
  const selectList = document.querySelector('.select-list');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-select-value]');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.textContent.trim();

          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          filterItems.forEach(item => {
              const category = item.getAttribute('data-category').trim();
              if (filter === 'Tous' || filter === category) {
                  item.classList.add('active');
              } else {
                  item.classList.remove('active');
              }
          });
      });
  });

  selectButton.addEventListener('click', () => {
      selectList.classList.toggle('active');
  });

  selectItems.forEach(item => {
      item.addEventListener('click', () => {
          const filter = item.textContent.trim();
          selectValue.textContent = filter;

          selectList.classList.remove('active');

          filterItems.forEach(filterItem => {
              const category = filterItem.getAttribute('data-category').trim();
              if (filter === 'All' || filter === category) {
                  filterItem.classList.add('active');
              } else {
                  filterItem.classList.remove('active');
              }
          });
      });
  });

  document.addEventListener('click', (e) => {
      if (!selectButton.contains(e.target) && !selectList.contains(e.target)) {
          selectList.classList.remove('active');
      }
  });
});




