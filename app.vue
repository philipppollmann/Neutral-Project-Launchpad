<template>
  <UCard>
    <template #header>
      <AppHeader>

      </AppHeader>
    </template>

    <div>
      <UDashboardCard
          title="Recent sales"
          description="You made 265 sales this month."
          icon="i-heroicons-chart-bar"
      >
        <UProgress />
      </UDashboardCard>
    </div>

    <div>
      <ProjectCard></ProjectCard>
    </div>

    <template #footer>
      <AppFooter>

      </AppFooter>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import Button from "~/components/Button.vue";
</script>