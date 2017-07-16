window.addEventListener("load", init);

var task_name;
var task_desc;

function init(){
    task_name = document.getElementById("task_name");
    task_desc = document.getElementById("task_desc");

    document.getElementById("add").addEventListener("click", add_task);
    document.getElementById("del").addEventListener("click", delete_task);
}

function add_task(){
    var ul = document.getElementById("task_list");
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute('src','garbage.png');

    task_obj.add_task(task_name.value, task_desc.value);

    li.innerHTML = task_obj.id + " " + task_name.value + " " +
                    task_desc.value;

    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click", markTask);
}

function markTask(event){
    event.srcElement.classList.toggle("marked");
    var current_task = event.srcElement.innerHTML.split(" ")[0];
    task_obj.toggle_task(current_task);
}

function delete_task(){
    task_obj.delete_task()
    print_task()
}

function print_task(){
    var ul = document.getElementById("task_list");
    ul.innerHTML = "";
    task_obj.task_list.forEach(function(obj){
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src','garbage.png');
        li.innerHTML = obj.id + " " + obj.name + " " + obj.desc;
        li.appendChild(img);
        ul.appendChild(li);
        li.addEventListener("click", markTask);
    })
}