<template>
  <div class="login">
    <div class="form">
      <div class="form__header">Авторизация</div>
      <div class="form__body">
        <appInput label="Логин или Телефон" v-model="login" type="phone" />
        <appInput v-model="password" type="password" placeholder="Пароль" />
        <button @click="logIn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import appInput from "../components/appInput.vue";
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  components: {
    appInput,
  },
  methods: {
    logIn() {
      this.axios
        .post("https://dev.moydomonline.ru/api/auth/login/", {
          username: this.login,
          password: this.password,
        })
        .then((res) => {
          this.$store.commit("SET_KEY", res.data.key);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="sass">
.login
  width: 100vw
  height: 100vh
  background: url('../assets/images/authorization-bg.png') center center / cover no-repeat
  display: flex
  align-items: center
  justify-content: center
button
  margin-top: 20px
  width: 110px
  height: 36px
  background-color: rgba(80, 176, 83, 1)
  color: #ffffff
  font-size: 14px
  outline: none
  border: none
  border-radius: 4px
.form
  width: 340px
  padding: 86px 20px 20px
  border-radius: 5px
  background-color: #fff
  position: relative
  &__header
    width: 308px
    height: 56px
    position: absolute
    background-color: var(--primary-green)
    color: #fff
    font-size: 16px
    line-height: 20px
    font-weight: 500
    display: flex
    align-items: center
    justify-content: center
    border-radius: 5px
    top: -19px
    left: 16px
  &__body
    display: flex
    flex-direction: column
    align-items: center
    row-gap: 8px
</style>
