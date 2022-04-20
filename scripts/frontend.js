Vue.createApp({
  methods: {
    show() {
      var pass = document.getElementById("password")
      if(pass.getAttribute('type') == "password") {
        pass.setAttribute("type", "text")
      }
      else {
        pass.setAttribute("type", "password")
      }
    }
}
}).mount('#app')
