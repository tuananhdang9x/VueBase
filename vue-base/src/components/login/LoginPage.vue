<template>
  <div class="login-page">
    <div class="login-item">
      <div class="app-logo">
        <app-icon />
      </div>
      <div class="page-title">HR portal</div>
      <div class="input-username">
        <input type="text" placeholder="ID" />
      </div>
      <div class="input-password">
        <input type="password" placeholder="パスワード" />
        <div class="view-password-icon">
          <eye-icon />
        </div>
      </div>
      <div class="confirm-field">
        <div class="save-login">
          <input type="checkbox" />
          <div class="save-login-title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/assets/icon/AppIcon.vue";
import EyeIcon from "../../assets/icon/EyeIcon.vue";
export default {
  components: { EyeIcon, AppIcon },
};
</script>

<style>
</style>