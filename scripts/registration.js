Vue.createApp({
    data() {
        return {
          passs: false,
          val0:'',
          val:'',
          img: [{ img: "./img/studi.png" }, {
            img: "img\teacher.png"
          }],
          selected: 'Не выбрано',
          products: [
            { id: 0, name: 'Не выбрано'},
            { id: 1, name: 'Студент' },
            { id: 2, name: 'Учитель' },
          ]
        }
    },
  methods: {
    show() {
      var pass = document.getElementById("password")
      var pass1 = document.getElementById("password1")
      if (pass.getAttribute('type') == "password" || pass1.getAttribute('type') == "password") {
        pass.setAttribute("type", "text")
        pass1.setAttribute("type", "text")
      }
      else {
        pass.setAttribute("type", "password")
        pass1.setAttribute("type", "password")

      }
    }
}
}).mount('#app')