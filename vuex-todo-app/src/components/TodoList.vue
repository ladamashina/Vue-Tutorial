<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos" v-bind:key="index" v-bind:todo="todo"></Todo>

  </div>
</template>

<script type = "text/javascript" >

import { mapGetters } from 'vuex';
import Todo from './Todo';

export default {
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
  created() {
    this.$store.dispatch('getAllTodos');
  },
  computed: mapGetters({
    todos: 'allTodos',
  }),
};
</script>