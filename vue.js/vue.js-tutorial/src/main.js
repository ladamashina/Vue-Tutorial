var app = new Vue({
    el: '#app',
    data: {
      message: 'ajsdksa!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
  })
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Посадить дерево' },
        { text: 'Построить дом' },
        { text: 'Вырастить сына' }
      ]
    }
  })
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })

  Vue.component('todo-item', {
    template: '<li>Это todo</li>'
  })
  
  Vue.component('todo-item', {
    // Компонент todo-item теперь принимает
    // "prop", то есть пользовательский параметр.
    // Этот параметр называется todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Овощи' },
        { id: 1, text: 'Сыр' },
        { id: 2, text: 'Что там ещё люди едят?' }
      ]
    }
  })