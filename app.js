function add_todo() {
    var x = document.getElementById('task').value;
    const node = document.createElement('div');
    node.className = 'list-group-item list-group-item-dark mb-3';
    const textnode = document.createTextNode(x);
    node.appendChild(textnode);
    document.getElementById('result').appendChild(node);
    var b = document.createElement('button');
    b.className = "btn btn-outline-danger m-3";
    b.textContent = "Delete Task";
    b.style = "float:right";
    b.onclick = delete_todo;
    node.appendChild(b);
    var e = document.createElement('button');
    e.className = 'btn btn-outline-success m-3';
    e.textContent = "Edit Task";
    e.style = "float: right; margin-right: 5px;";
    e.onclick = edit_todo;
    node.appendChild(e);
    document.getElementById('task').value = "";
}

function clear_todo() {
    document.getElementById('result').innerHTML = "";
}

function delete_todo(e) {
    e.target.parentElement.remove();
}

function edit_todo(e) {
    const newdiv = document.createElement('div');
    newdiv.className = "container text-center mt-3";
    var i = document.createElement('input');
    i.className = "form-control mt-3";
    i.setAttribute("type", "text");
    newdiv.appendChild(i);
    var b1 = document.createElement('button');
    b1.className = "btn btn-outline-success m-3 ";
    b1.textContent = "Update";
    b1.onclick = edit_text;
    newdiv.appendChild(b1);
    var b2 = document.createElement('button');
    b2.className = "btn btn-outline-danger m-3 ";
    b2.textContent = "Close";
    b2.onclick = close_box ;
    newdiv.appendChild(b2);
    e.target.parentElement.appendChild(newdiv);
}

function edit_text(e) {
    y = e.target.parentElement.firstChild.value
    const textnode1 = document.createTextNode(y)
    e.target.parentElement.parentElement.replaceChild(textnode1,e.target.parentElement.parentElement.firstChild)
    e.target.parentElement.remove()
}

function close_box(e){
    e.target.parentElement.remove();
}