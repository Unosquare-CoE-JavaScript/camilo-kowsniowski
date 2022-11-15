let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
      size: 150
    };
  },
  computed: {
    circle_classes(selectedColor) {
      return { purple: this.isPurple };
    }
  }
}).mount('#app');
