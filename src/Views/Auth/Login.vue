<template>
  <div class="flex h-[100vh] bg-slate-100">
    <div class="w-[50%] flex items-center justify-center py-10">
      <img class="w-[75%] mx-auto" src="@/assets/login.png" />
    </div>
    <div
      class="flex flex-col mx-auto my-auto h-[40%] w-[25%] border border-[#efeff2] rounded-md shadow-sm shadow-slate-600"
    >
      <div class="flex flex-col justify-center items-center py-10 text-center">
        <h2 class="text-4xl font-semibold text-slate-700 italic font-sans">
          PANDAS SYSTEM
        </h2>
        <div class="flex flex-col mt-10">
          <div class="xl:w-96" data-te-input-wrapper-init>
            <input
              v-model="form.username"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-slate-600"
              placeholder="User name (panda)"
            />
          </div>
          <div class="xl:w-96" data-te-input-wrapper-init>
            <input
              v-model="form.password"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-slate-600"
              placeholder="Password (panda)"
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
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref({
  username: "",
  password: "",
});
function login(e: any): void {
  console.log(e.keyCode);
  if (e.keyCode === 13 || e.keyCode == undefined) {
    if (form.value.password && form.value.username) {
      if (form.value.password === "panda" && form.value.username === "panda") {
        localStorage.setItem(
          "access",
          "RE12rDFG54DlklswsaFG64t23li21nmb54try654asd54a"
        );
        alert("Loged in");
        router.push("/");
      } else {
        alert("Login yoki parol noto'g'ri");
      }
    } else {
      alert("Login yoki parol kiritilmagan");
    }
  }
}
</script>
