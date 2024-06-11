<template>
    <div class="p-4">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border">Học kỳ</th>
            <th class="py-2 px-4 border">Năm học 2020-2021</th>
            <th class="py-2 px-4 border">Năm học 2021-2022</th>
            <th class="py-2 px-4 border">Năm học 2022-2023</th>
            <th class="py-2 px-4 border">Năm học 2023-2024</th>
            <th class="py-2 px-4 border">Tổng khóa</th>
            <th class="py-2 px-4 border">Xếp loại khóa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border">Kỳ 1</td>
            <td class="py-2 px-4 border text-red-500">75</td>
            <td class="py-2 px-4 border text-red-500">80</td>
            <td class="py-2 px-4 border text-red-500">80</td>
            <td class="py-2 px-4 border text-red-500">82</td>
            <td class="py-2 px-4 border" rowspan="2">77</td>
            <td class="py-2 px-4 border" rowspan="2">Khá</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Kỳ 2</td>
            <td class="py-2 px-4 border text-red-500">75</td>
            <td class="py-2 px-4 border text-red-500">81</td>
            <td class="py-2 px-4 border text-red-500">68</td>
            <td class="py-2 px-4 border text-red-500">41</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Tổng</td>
            <td class="py-2 px-4 border text-red-500">75</td>
            <td class="py-2 px-4 border text-red-500">80</td>
            <td class="py-2 px-4 border text-red-500">74</td>
            <td class="py-2 px-4 border text-red-500">41</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Xếp loại</td>
            <td class="py-2 px-4 border text-red-500">Khá</td>
            <td class="py-2 px-4 border text-red-500">Tốt</td>
            <td class="py-2 px-4 border text-red-500">Khá</td>
            <td class="py-2 px-4 border text-red-500">Yếu</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4">
        <select class="border p-2 mr-4" v-model="selectedHocKy">
          <option>--- Chọn học kỳ ---</option>
          <!-- Add more options here -->
        </select>
        <select class="border p-2 mr-4" v-model="selectedNamHoc">
          <option>--- Chọn năm học ---</option>
          <!-- Add more options here -->
        </select>
        <button class="bg-blue-500 text-white py-2 px-4 rounded">Xem</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedHocKy: '',
        selectedNamHoc: '',
      };
    },
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  </style>
  