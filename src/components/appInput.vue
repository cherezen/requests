<template>
  <div class="input">
    <label for="" class="input__label">
      <div class="input__icon"></div>
      <div class="input__wrapper">
        {{ label }}
        <input
          :type="type"
          :placeholder="placeholder"
          class="input__input"
          v-model="value"
          @input="onInput"
        />
      </div>
      <div
        v-if="type === 'password'"
        class="input__icon input__icon_password"
        @click="changeType"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.value === "" && this.type === "phone") {
      this.value = "+7" + this.value;
    }
  },
  data() {
    return {
      value: "",
      passwordValue: "",
      hide: true,
      pwdValue: "",
    };
  },
  props: {
    label: String,
    placeholder: String,
    type: String,
  },
  methods: {
    changeType() {
      //
    },
    onInput() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style scoped lang="sass">
.input
  width: 300px
  height: 56px
  display: flex
  align-items: flex-end
  border-bottom: 1px solid rgba(204, 204, 204, 1)
  &__icon
    width: 24px
    height: 22px
    background-position: center bottom
    background-size: cover
    background-repeat: no-repeat
    background-image: url('../assets/icons/phone.svg')
    margin-right: 8px
    margin-bottom: 8px
    &_password
      background-image: url('../assets/icons/hide.svg')
      cursor: pointer
  &__wrapper
    width: 100%
  &__label
    width: 100%
    display: block
    display: flex
    align-items: flex-end
    font-size: 12px
    line-height: 18px
    color: var(--primary-green)
  &__input
    display: block
    height: 37px
    border: none
    background: transparent
    outline: transparent
    width: 100%
.password
  align-self: flex-end
</style>
