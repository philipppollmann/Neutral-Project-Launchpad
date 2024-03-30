<script setup lang="ts">
import {ref} from 'vue';
import { ProjectInformation } from "~/model/ProjectInformation";
import { getAllProjects } from "~/server/ProjectInformationList";


const projects = ref<ProjectInformation[]>(getAllProjects());

</script>

<template>
    <UPageGrid>

      <ProjectCard
          v-for="(module, index) in projects"
          :key="index"
          :title="module.title"
          :icon-src="module.iconSrc"
          :description="module.description"
          :to="module.to"
      >
      </ProjectCard>

    </UPageGrid>
</template>


<style scoped>

</style>