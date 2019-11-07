<template>
    <div>
        <HeaderLayout />
        <div class="incomplte-list">
            <div class="text-center mb-3">
                <InsertTodo v-on:addTodoList="addToList" />
            </div>
            <div v-bind:key="todo.id" v-for="todo in todos">
                <TodoList v-bind:todo="todo" v-on:markComplete="markComplete" />
            </div>
        </div>


        <div class="complted-list pb-3">
            <h4 class="mt-4 pt-3 mb-4 text-center">Completed Task</h4>
            <div class="complted-list" v-bind:key="todo.id" v-for="todo in todos">
                <CompletedList v-bind:todo="todo"/>
            </div>
        </div>


    </div>
</template>

<script>

import TodoList from './TodoList.vue';
import HeaderLayout from './HeaderLayout.vue';
import InsertTodo from './InsertTodo.vue';
import CompletedList from './CompletedList.vue';

export default {
    name: 'Todos',
    components: {
        HeaderLayout,
        TodoList,
        InsertTodo,
        CompletedList,
    },
    data() {
        return {
             todos: [
                { id: 1, body: 'Bring Milk', completed: true },
                { id: 2, body: 'Groceies', completed: false },
                { id: 3, body: 'Clean home', completed: false },
                { id: 4, body: 'Walking', completed: false },
                { id: 5, body: 'Meeting client', completed: false },
            ]
        }
        
    },
    methods: {
        markComplete(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        addToList(newList) {
            this.todos = [...this.todos, newList];
        }
    }
}
</script>

<style scoped>
.complted-list {
    background: #ececee;
}
.incomplte-list {
    background: #ececee;
    padding: 15px;
}

</style>