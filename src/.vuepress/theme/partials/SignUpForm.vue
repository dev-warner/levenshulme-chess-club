<template>
  <form class="lv-sign-up">
    <div class="lv-form-container">
      <label for="name">Name:</label>
      <input label="name" type="text" />
    </div>

    <div class="lv-form-container">
      <label for="email">Email:</label>
      <input label="email" type="email" />
    </div>

    <div class="lv-form-container">
      <label for="consent">I consent to the sending of emails</label>
      <input label="consent" type="checkbox" />
    </div>
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
export default {
  props: []
};
</script>
