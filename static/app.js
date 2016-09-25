new Vue({
    el: '#app',
    data: {
        tasks: [
            {title: 'Create task list', status: false},
            {title: 'Write new task', status: true},
            {title: 'Remove task', status: false}
        ],
        newTask: null
    },
    methods: {
        addTask: function(){
            if(this.newTask == null) return;
            this.tasks.push({title: this.newTask, status: false});
            this.newTask = null;
        },
        changeStatus: function(index){
            this.tasks[index].status = !this.tasks[index].status;
        },
        removeTask: function(task) {
            this.tasks.$remove(task)
        }
    }
});