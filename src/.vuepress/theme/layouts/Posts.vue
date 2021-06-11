<template>
  <main id="site-main" class="site-main outer">
    <div class="inner posts">
      <Content class="lv-home-content" />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9506.079757219472!2d-2.1893416!3d53.4412913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8c226f95cdf54a0!2sThe%20Talleyrand!5e0!3m2!1sen!2sie!4v1622061390733!5m2!1sen!2sie"
        style="border:0;"
        class="lv-map"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div class="post-feed">
        <card
          v-for="(post, index) in posts"
          :post="post"
          :key="index"
          :large="!index % 6"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import Card from "../partials/Card";
import Error from "../partials/Error";

export default {
  components: { Card, Error },
  computed: mapGetters(["posts"])
};
</script>
