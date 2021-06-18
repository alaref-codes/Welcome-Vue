const todos =  [
    {text: "Hello world"},
    {text: "Hello nice"},
    {text: "Hello slave"},
]

const app = {
    data() {
        return {
            todos: todos
        }
    }
}
Vue.createApp(app).mount('#app');
