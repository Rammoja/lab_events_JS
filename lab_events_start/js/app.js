document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

    const handleFormSubmit = function(event){
      event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const category = form.category.value;
        
        const selectResult = document.querySelector('#select-result');
        const readingList = document.querySelector('#reading-list');
      readingList.textContent = ` ${title} ${author} ${category}`;

      form.reset();
    }

  form.addEventListener('submit', handleFormSubmit);


});
