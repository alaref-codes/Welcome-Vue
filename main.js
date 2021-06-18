const app = {
    date() {
        return {
            message: "You loaded this page on" + new Date().toLocaleString() 
        }
    }
}

Vue.createApp(app).mount('#app');