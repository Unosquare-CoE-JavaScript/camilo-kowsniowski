<template>
  <button type="button" @click="onClickAge">age update</button>
  <p>the user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>
<script>
export default {
  name: 'user',
  //   validating values
  props: {
    age: {
      type: Number,
      //   required: true,
      //   default: 20
      validator(value) {
        return value < 130;
      }
    }
  },
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2;
    }
  },
  methods: {
    onClickAge() {
      this.$emit('age-Change', 3);
    }
  }
};
</script>
