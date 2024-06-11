<template>
  <header-layout></header-layout>
  <slot></slot>

  <footer-layout></footer-layout>
</template>

<script setup lang="ts">
import FooterLayout from "@/components/Footer.vue";
import HeaderLayout from "@/components/Header.vue";
</script>

<style></style>
