<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  description: String,
  icon: String,
  to: String,
  target: String,
  iconSrc: String,
})
</script>

<template>
  <UPageCard
      :title="title"
      :description="description"
      :icon="icon"
      :to="to"
      :target="target"
  >
    <img :src="iconSrc" class="w-1/4 justify-center">
  </UPageCard>
</template>

<style scoped>

</style>