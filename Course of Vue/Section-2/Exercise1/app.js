// first instance
const vm = Vue.createApp({
  // v-model
  data() {
    return {
      firstName: 'Camilo',
      middleName: '',
      lastName: 'Kosniowski',
      url: 'http://google.com',
      raw_url: '<a href="http://google.com" target="_blank">Google </a>',
      age: 20
    };
    // creating methods and computed propieties using regulars functions
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      //   event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  computed: {
    fullName() {
      console.log('full name method was called');
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    }
  }
}).mount('#app');

// updating the data
// setTimeout(() => {
//   vm.firstName = 'aljoscha';
// }, 2000);

//  second instance
// Vue.createApp({
//   data() {
//     return {
//       firstName: 'aljoscha',
//       lastName: 'Kosniowski'
//     };
//   }
// }).mount('#app2');
