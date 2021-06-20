const app = Vue.createApp({
  data() {
    return {
      name: 'Alaref Abushaala',
      }
  },
  computed: {
    decide() {
      return{
        boldy: this.name.length > 10,
        redy: this.name[0] === "A", 
      }
    }
  }
}).mount("#app")