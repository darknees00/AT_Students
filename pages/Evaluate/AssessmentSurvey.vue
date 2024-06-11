<template>
    <div class="isolate bg-white w-full md:grid-cols-3 gap-4 mt-40">
        <div class="border border-blue-500 rounded-lg p-4 mb-4 mx-4 md:mx-10">
            <div class="bg-white rounded-lg shadow-md p-6">
                <table class="w-full">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="py-2 px-4 text-left">Nội dung đánh giá</th>
                            <th class="py-2 px-4 text-left">Yếu tố của sinh viên</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.id" class="border-b">
                            <td class="border py-2 px-4">{{ item.content }}</td>
                            <td class="border py-2 px-4">
                            <div v-for="factor in item.factors" :key="factor.id" class="flex items-center">
                                <span :class="{'text-red-500': factor.status === 'Không đạt', 'text-yellow-500': factor.status === 'Đạt', 'text-green-500': factor.status === 'Tốt', 'text-gray-500': factor.status === 'Rất tốt'}">
                                {{ factor.status }}
                                </span>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          {
            id: 1,
            content: 'Giảng viên phổ biến mục tiêu, ý nghĩa của học phần đối với ngành học',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 2,
            content: 'Giảng viên cung cấp thông tin và tài liệu phục vụ học phần',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 3,
            content: 'Giảng viên phổ biến hình thức kiểm tra, kế hoạch đánh giá học phần',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 4,
            content: 'Phương pháp giảng dạy của giảng viên đề tiếp thụ và lôi cuốn người học',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 5,
            content: 'Biên bản giảng dạnh thái độ chuyên cần, hợp tác, tích lũy',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 6,
            content: 'Giảng viên thường xuyên theo dõi và có biện pháp khắc phục các khó khăn, vướng mắc của sinh viên trong học tập',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 7,
            content: 'Trình bày lịch trình học tập, giới thiệu và hướng dẫn cụ thể các hoạt động của học phần',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 8,
            content: 'Tạm thời thu lệnh các GV, gv giảng, lách, nhắm, đứng chuẩn mực',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 9,
            content: 'Miêu tả các điểm mạnh, điểm yếu, hạn chế của sinh viên',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 10,
            content: 'Mục tiêu giáo dục toàn diện của học phần',
            factors: [
              { id: 1, status: 'Không đạt' },
              { id: 2, status: 'Đạt' },
              { id: 3, status: 'Tốt' },
              { id: 4, status: 'Rất tốt' }
            ]
          },
          {
            id: 11,
            content: 'Góp ý của sinh viên',
            factors: []
          },
          {
            id: 12,
            content: 'Góp ý cho Nhà trường',
            factors: []
          }
        ]
      }
    }
  }
  </script>
