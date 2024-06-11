<script setup lang="ts">
import { ref } from "vue";

const data = ref<any[]>([]);
const loadData = async () => {
  data.value = await $fetch("/DepartmentSchedule", {
    method: "GET",
    baseURL: "https://localhost:44356/api",
  });
};

onBeforeMount(async () => {
  await loadData();
});

const selectDepartment = async (id: number) => {
  console.log("");
};
</script>
<template>
  <div>Dữ liệu</div>

  <ul>
    <li
      v-for="(item, index) in data"
      :key="index"
      @click="selectDepartment(item.departmentScheduleId)"
    >
      {{ item.departmentScheduleName }}
    </li>
  </ul>
</template>
