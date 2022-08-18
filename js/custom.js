let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    count++
    const inputField = document.getElementById('input-Value');
    const input = inputField.value;
    inputField.value = '';
    if (input === '') {
        alert('write something');
        return;
    }

    const contentContainer = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${count}</th>
    <td>${input}</td>
    <td>
        <button class="btn btn-secondary edit-btn">Done</button>
        <button class="btn btn-danger delete-btn">Delete</button>
    </td>
    `;
    contentContainer.appendChild(tr);

    // ? for edit
    const editBtn = document.getElementsByClassName('edit-btn');
    for(const editButton of editBtn){
        editButton.addEventListener('click', function(event){
            event.target.parentNode.previousElementSibling.style.textDecoration = 'line-through';
            console.log(event.target.parentNode.parentNode.firstElementChild.style.textDecoration = 'line-through');
        })
    }
    // ? for delete
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for(const deleteButton of deleteBtn){
        deleteButton.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none'
        })
    }

})