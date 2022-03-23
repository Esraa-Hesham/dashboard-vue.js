<template>
  <div class="applogin">
    <div class="login-wrap">
      <div class="login-html">
        <label for="tab-2" class="tab">Login</label>
        <div class="login-form">
          <form v-on:submit.prevent="loginValidation">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">E-mail</label>
                <input
                  id="user"
                  name="email"
                  type="email"
                  class="input"
                  v-model="email"
                  ref="email"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">Password</label>
                <input
                  id="pass"
                  name="password"
                  type="password"
                  class="input"
                  data-type="password"
                  v-model="password"
                  ref="password"
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check"
                  ><span class="icon"></span> Keep me Signed in</label
                >
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign In" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
    };
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
  methods: {
    loginValidation() {
      let email = this.$refs.email.value;
      let password = this.$refs.password.value;
      for (let i = 0; i < this.users.length; i++) {
        if (
          email == this.users[i].email &&
          password == this.users[i].password
        ) {
          this.users[i];
          this.$store.commit("login", this.users[i]);

          break;
        }
      }
      if (this.$store.getters.getLoggedInUser) {
        this.$router.push("/UsersTable/");
      } else {
        alert("Invalid Username and/or Password!");
      }
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  color: #6a6f8c;
  background: #95008d;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
  color: #eee;
  font-weight: bold;
  font-size: 40px;
}
.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 520px;
  position: relative;
  background: url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg)
    no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 50px 70px 50px 70px;
  background: rgba(224, 182, 163, 0.9);
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #95008d;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  text-security: circle;
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #95008d;
  font-size: 18px;
}
.login-form .group .button {
  background: #95008d;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #95008d;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html .sign-in:checked {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}
</style>
