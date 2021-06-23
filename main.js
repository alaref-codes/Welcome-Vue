const app = Vue.createApp({})

app.component( 'counter-button' ,{
  data() {
    return {
      counter: 0,
    }
  },
  template: `
    <button @click="counter++" >
    You clicked this {{counter}}
    </button>
  `
})

app.mount("#app")