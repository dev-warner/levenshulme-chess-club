<template>
  <nav class="site-nav">
    <div class="site-nav-left-wrapper">
      <div class="site-nav-left">
        <router-link v-if="!isHome && blog.logo" class="site-nav-logo" to="/">
          <img :src="$withBase(blog.logo)" :alt="blog.title" />
        </router-link>
        <router-link v-if="!isHome && !blog.logo" class="site-nav-logo" to="/">
          {{ blog.title }}
        </router-link>
        <div class="site-nav-content">
          <ul class="nav lv-nav" v-if="nav" role="menu">
            <li v-for="(item, index) in nav" role="menuitem" :key="index">
              <router-link :class="{ active: item.active }" :to="item.link">
                <span v-if="!item.type">{{ item.text }}</span>
                <button v-if="item.type === 'primary'" class="lv-button">
                  {{ item.text }}
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="site-nav-right">
      <div class="social-links">
        <social-link
          v-for="(channel, index) in social"
          :url="channel.url"
          :type="channel.type"
          :key="index"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

import SocialLink from "./SocialLink";

export default {
  components: { SocialLink },
  computed: {
    ...mapGetters(["blog", "type", "social", "nav"]),
    isHome() {
      return this.type === "home";
    }
  }
};
</script>
