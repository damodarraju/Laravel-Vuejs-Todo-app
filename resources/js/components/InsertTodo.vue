<template>
    <form @submit="addTodo">
        <input type="text" class="form" v-model='body' name="body" placeholder="Add todo">
        <input type="submit" class="btn btn-primary" value="Add to list">
    </form>
</template>

<script>
export default {
    name: "InsertTodo",
    data() {
        return {
            body: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newList = {
                id: 10,
                body: this.body,
                completed: false
            }
            this.$emit('addTodoList', newList);

            this.body = '';
        }
    }
}
</script>

<style scoped>
.form {
    padding: 4px 6px 8px 13px;
    border-radius: 2px;
}
</style>