<template>
   <div class="container">
         <h6 class="mb-2" v-if="todo.completed">
            <input type="checkbox" v-on:change="markInComplete">
            {{todo.body}}
        </h6>
    </div>
</template>
<script>
export default {
    name: 'CompletedList',
    props: ['todo'],
    methods: {
        markInComplete() {
            this.todo.completed = this.todo.completed == false;
        },
    }
}
</script>

<style scoped>
    h6 {
        padding: 10px;
        background:#00800033;
        text-decoration: line-through;
    }
</style>
