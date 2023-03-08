<template>
  <div>
    <div class="header">
      <div class="inner-header">
        <div class="logo">
          <span>PAWS WMS</span>
          <span>Makes Everything Simple</span>
        </div>
        <div class="form-box">
          <div class="window">
            <h2>Login</h2>
            <form class="box">
              <input
                v-model="form.username"
                type="username"
                class="mt-4 form-control"
                placeholder="Your username"
              />
              <input
                v-model="form.password"
                type="password"
                class="mt-2 form-control"
                placeholder="Your password"
              />
              <input
                type="submit"
                class="mb-2 btn btn-light mt-2"
                value="Sign In"
                @click="setTokent"
              />
            </form>
          </div>
        </div>
      </div>
      <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
    <!--Header ends-->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const form = ref({
  username: "",
  password: "",
});
function setTokent(e: any): void {
  e.preventDefault();
  if (form.value.password && form.value.username) {
    if (form.value.password === "panda" && form.value.username === "panda") {
      alert("Loged in");
    } else {
      alert("Login yoki parol noto'g'ri");
    }
  } else {
    alert("Login yoki parol kiritilmagan");
  }
}
</script>
