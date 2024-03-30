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
    <div class="flex justify-center items-center h-full">
      <img :src="iconSrc" class="w-1/4">
    </div>
  </UPageCard>
</template>


<style scoped>

</style>