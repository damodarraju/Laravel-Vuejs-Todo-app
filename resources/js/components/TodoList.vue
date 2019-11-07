<template>

<div>
    <div v-bind:class="{'markComplete': todo.completed}">
        <h6 class="list-view" v-if="todo.completed == false">
            <input type="checkbox" v-on:change="markComplete">
            {{todo.body}}
        </h6>
    </div>
  </div>      

</template>
<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        },
    }
}
</script>

<style scoped>
    .markComplete {
        text-decoration: line-through;
    }
    .list-view {
        background: antiquewhite;
        padding: 10px;
    }
</style>
