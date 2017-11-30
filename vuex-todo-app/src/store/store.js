import Vue from 'vue';
import Vuex from 'vuex';
import todosApi from '../api/todosApi';
import urls from './utils/urls';

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
  getCompletedTodosCount: state => state.todos.filter(todo => todo.completed === true).length,
  getPendingTodosCount: state => state.todos.filter(todo => todo.completed === false).length,
};

const actions = {
  getAllTodos({ commit }) {
    todosApi.todos(urls.getUrl().url).getAll().then(data => commit('getAllTodos', data));
  },
  deleteTodo({ commit }, todo) {
    todosApi.todos(urls.getUrl().url).deleteTodo(todo.id).then(commit('deleteTodo', todo));
  },
  completeTodo({ commit }, todo) {
    const tododo = todo;
    tododo.completed = true;
    todosApi.todos(urls.getUrl().url).updateTodo(tododo).then(commit('updateTodo', todo));
  },
  addTodo({ commit }, todo) {
    todosApi.todos(urls.getUrl().url).addTodo(todo).then(todo2 => commit('addTodo', todo2));
  },
  updateTodo({ commit }, todo) {
    todosApi.todos(urls.getUrl().url).updateTodo(todo).then(commit('updateTodo', todo));
  },
};

const mutations = {
  getAllTodos(state, todos) {
    state.todos = todos;
  },
  deleteTodo(state, todo) {
    const todoIndex = state.todos.indexOf(todo);
    state.todos.splice(todoIndex, 1);
  },
  updateTodo(state, todo) {
    const newTodo = state.todos.find(item => item.id === todo.id);
    newTodo.userId = todo.userId;
    newTodo.title = todo.title;
    newTodo.project = todo.project;
    newTodo.completed = todo.completed;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
