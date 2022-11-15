let vm = Vue.createApp({
  data() {
    return {
      // simple array
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
      // array of objects
      people: [
        { name: 'John', age: 20 },
        { name: 'Rick', age: 18 },
        { name: 'Amy', age: 33 }
      ]
    };
  }
}).mount('#app');
