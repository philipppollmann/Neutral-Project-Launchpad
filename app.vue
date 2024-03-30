<script lang="ts">

</script>

<template>
  <UCard>
    <template #header>
      <AppHeader/>
    </template>

    <ProjectLaunchPad/>

    <template #footer>
      <AppFooter>

      </AppFooter>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import Button from "~/components/Button.vue";
import ProjectLaunchPad from "~/components/ProjectLaunchPad.vue";
</script>