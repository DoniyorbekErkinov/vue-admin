import { defineStore } from 'pinia';
import { usePost, useGet } from '../../Service/ApiService';
import { setItem, getItem } from '../../helpers/storage';
import { UserType, LoginForm } from '../../Types';
export type RootUserState = {
    userData: UserType
}
export const useUserStore = defineStore('user', {    
  state: () => ({
      userData: null,
  } as RootUserState),
  getters: {},
  actions: {
    async login(data: LoginForm) {
      try {
        return await usePost({ url: 'auth/login', data }).then((res) => {
          setItem('access', res.data.token);
          setItem('id', res.data.id);
          setItem('username', res.data.username);
          this.getUserData();
          return 'success';
        });
      } catch (error) {
        console.error(error);
      }
    },
    async getUserData() {
      await useGet({ url: `users/${getItem('id')}` }).then((res) => {
        this.userData = {
          id: res.data.id,
          username: res.data.username,
          image: res.data.image,
          fullName: `${res.data.firstName} ${res.data.lastName}`,          
          email: res.data.email,
          gender: res.data.gender,
        };
      });
    },
  },
});
