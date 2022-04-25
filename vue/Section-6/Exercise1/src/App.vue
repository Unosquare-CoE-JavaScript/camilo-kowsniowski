<template>
  <h3>hola</h3>

  <p>kosniowski</p>
  <greeting :age="age" />
  <user :age="age" @age-Change="updateAge" />
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';
export default {
  name: 'App',
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 20
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    }
  }
};
</script>

<style></style>
