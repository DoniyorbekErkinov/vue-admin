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
          <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
            <input
              v-model="form.username"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow-slate-600"
              id="exampleFormControlInput1"
              placeholder="Example label"
            />
            <label
              for="exampleFormControlInput1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Example label
            </label>
          </div>
          <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
            <input
              v-model="form.password"
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 shadow-sm mt-4 py-2 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 shadow-slate-600"
              id="exampleFormControlInput1"
              placeholder="Example label"
              @keyup="login"
            />
            <label
              for="exampleFormControlInput1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Example label
            </label>
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
  e.preventDefault();
  if (e.keyCode === 13) {
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
