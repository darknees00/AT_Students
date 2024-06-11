<template>
    <div class="isolate bg-white w-full md:grid-cols-3 gap-4 mt-40">
      <div class="border border-blue-500 rounded-lg p-4 mb-4 mx-4 md:mx-10">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-green-400">
                <th class="border p-2">Kỳ thứ</th>
                <th class="border p-2">Mã học phần</th>
                <th class="border p-2">Tên học phần</th>
                <th class="border p-2 hidden md:table-cell">Elearning</th>
                <th class="border p-2 hidden md:table-cell">Môn tự chọn</th>
                <th class="border p-2">Số tín chỉ</th>
                <th class="border p-2 hidden md:table-cell">Tổng số tiết</th>
                <th class="border p-2 hidden md:table-cell">Chi tiết</th>
                <th class="border p-2 hidden md:table-cell">Tài liệu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2 text-center">1</td>
                <td class="border p-2">077CQGT01</td>
                <td class="border p-2">Giải tích P1</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">60</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">067CQ4KNM1</td>
                <td class="border p-2">Kỹ năng mềm 1</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">30</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">107CQLDC</td>
                <td class="border p-2">Pháp luật đại cương</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">45</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2 text-center">2</td>
                <td class="border p-2">077CQ1bCSLT</td>
                <td class="border p-2">Cơ sở lập trình</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">4</td>
                <td class="border p-2 text-center">90</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">077CQĐASO</td>
                <td class="border p-2">Đại số</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">60</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">077CQGT02</td>
                <td class="border p-2">Giải tích P2</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">60</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2">077CQ1bCDGT</td>
                <td class="border p-2">Cấu trúc dữ liệu và giải thuật</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">60</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">007CQLLCT3</td>
                <td class="border p-2">Chủ nghĩa xã hội khoa học</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">2</td>
                <td class="border p-2 text-center">30</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">007CQLLCT4</td>
                <td class="border p-2">Lịch sử Đảng Cộng sản Việt Nam</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">2</td>
                <td class="border p-2 text-center">45</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2 text-center">4</td>
                <td class="border p-2">077CQ2bATDL</td>
                <td class="border p-2">An toàn dữ liệu</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">2</td>
                <td class="border p-2 text-center">45</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">HQTCSDL</td>
                <td class="border p-2">Hệ quản trị cơ sở dữ liệu</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">45</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
              <tr>
                <td class="border p-2"></td>
                <td class="border p-2">077CQ2bLHĐT</td>
                <td class="border p-2">Lập trình hướng đối tượng</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 text-center">45</td>
                <td class="border p-2 hidden md:table-cell"></td>
                <td class="border p-2 hidden md:table-cell"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  