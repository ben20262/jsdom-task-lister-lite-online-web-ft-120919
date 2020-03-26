document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    let task = document.querySelector('form input#new-task-description').value
    let elem = document.createElement('li')
    document.querySelector('ul#tasks').appendChild(elem)
    elem.innerHTML = task


    
  })
  
});
