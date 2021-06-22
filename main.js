const mssg = Vue.createApp({
  data(){
    return{
      checkedNames: [],
    }
  },
  computed:{
    priced() { 
      return this.checkedNames.length * 10 + ' $'
    }
  }

}).mount('#mssg')