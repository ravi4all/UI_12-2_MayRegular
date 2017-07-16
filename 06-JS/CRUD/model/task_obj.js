var task_obj = {
    id : 0,
    task_list : [],
    add_task : function(name,desc) {
        this.id++;
        var obj = new Task(this.id, name, desc);
        this.task_list.push(obj);
        console.log(this.task_list);
    },

    toggle_task : function(id){
        var task_data = this.task_list.filter(function(obj){
            return obj.id == id;
        });
        /*console.log(task_data);*/
        task_data[0].selected = !task_data[0].selected;
    },

    delete_task : function () {
        this.task_list = this.task_list.filter(function(obj){
            return obj.selected == false;
        })
    }
}