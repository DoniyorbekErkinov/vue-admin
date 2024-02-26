<template>
  <div class="flex h-screen bg-slate-100">
    <div
      class="w-[50%] 2xl:flex xl:flex slg:flex lg:flex hidden items-center justify-center py-10"
    >
      <img class="w-[75%] mx-auto" src="@/assets/login.png" />
    </div>
    <div
      class="flex justify-center items-center mx-auto my-auto h-full 2xl:w-1/2 xl:w-1/2 slg:w-1/2 lg:w-1/2 w-full"
    >
      <div
        class="flex flex-col justify-center items-center py-10 text-center 2xl:w-1/2 xl:w-1/2 slg:w-1/2 lg:w-1/2 w-5/6 border border-[#efeff2] rounded-md shadow-sm shadow-slate-600 relative"
      >
        <h2 class="text-4xl font-semibold text-slate-700 italic font-sans">
          PANDAS SYSTEM
        </h2>
        <span class="absolute top-20">Login: kminchelle</span>
        <span class="absolute top-24">Password: 0lelplR</span>
        <div class="flex flex-col mt-10">
          <div class="xl:w-96">
            <input
              v-model="form.username"
              ref="usernameInput"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-slate-600"
              placeholder="Username"
            />
          </div>
          <div class="xl:w-96">
            <input
              v-model="form.password"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-slate-600"
              placeholder="Password"
              @keyup="login"
            />
          </div>
          <button
            @click="login"
            class="shadow-sm shadow-slate-600 w-[40%] mx-auto py-2 mt-4 text-xl font-medium text-slate-700 italic font-sans"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {useUserStore} from './Login.store'
import {LoginForm} from '../../Types/index'
const router = useRouter();
const store = useUserStore()
const form = ref<LoginForm>({
  username: '',
  password: '',
});
const usernameInput = ref<any>(null)
function login(e: any): void {
  if (e.keyCode === 13 || e.keyCode == undefined) {
    if (form.value.password && form.value.username) {
      store.login(form.value).then((res) => {
        router.push("/");
        alert('Loged in');
      })
    } else {
      alert('Login yoki parol kiritilmagan');
    }
  }
}

onMounted(() => {
  usernameInput.value.focus()
})
</script>
