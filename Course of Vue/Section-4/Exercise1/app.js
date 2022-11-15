let vm = Vue.createApp({});

// creating component

vm.component('hello', {
  template: `<h1> {{message}}</h1>`,
  data() {
    return {
      message: 'hello world'
    };
  }
});

vm.mount('#app');
// another app
// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: 'hola mundo'
//     };
//   },
//   render() {
//     return Vue.h('h1', this.message);
//   }
// }).mount('#app2');
