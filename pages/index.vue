<script setup lang="ts">
import test from "@/components/test.vue";

</script>
<template >
  <section class="container mx-auto">
    <marquee
      withfull
      direction="left"
      height="28px"
      size="13px"
      scrollamount="20"
      display="block"
    >
      Chào mừng bạn đến với cổng thông tin DNU
    </marquee>
  </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 -mb-80">
      <div class="border border-gray-500 rounded-lg p-4 mb-96 md:mx-10">
        <h2 class="font-bold uppercase"> Tin tức mới nhất</h2>
        <div class="col-md-4 alpha">
          <div style="border: 1px solid #dcdcdc; border-top: 5px solid #ffd800; min-height: 650px; background: #ffffff">
            <div class="news" id="TinMoiNhat"></div>
              <div class="view-all">
                <a href="/ThongTin/ThongBao?CatID=5">Xem tất cả</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border border-gray-300 rounded-lg p-4 mb-96 ">
        <h2 class="font-bold uppercase"> Thông báo</h2>
        <div class="col-md-4 alpha">
          <div style="border: 1px solid #dcdcdc; border-top: 5px solid #ffbcff; min-height: 650px; background: #ffffff">
            <div class="news" id="TinMoiNhat"></div>
              <div class="view-all mt-3">
                <p class="text-blue-500">
                  Thông báo V/v: Khảo sát mức độ hài lòng của sinh viên trường Đại học Đại Nam
                </p>
                <br>
                <p class="text-blue-500">
                  Thông báo V/v: Tổ chức thi kết thúc học phần lần 2 khóa 17 học kỳ I năm học 2023-2024
                </p>
                <br>
                <p class="text-blue-500">
                    Thông báo V/v: Ban hành thời khóa biểu trình độ đại học chính quy khóa 13,14,15,16 học kỳ II năm học 2023-2024 
                </p>
            </div>
          </div>
        </div>
      </div>

      <div class="border border-gray-300 rounded-lg p-4 mb-96 md:mx-10">
        <h2 class="font-bold uppercase text-blue-500">Văn bản, Biểu mẫu</h2>
        <div class="col-md-4 alpha">
          <div style="border: 1px solid #dcdcdc; border-top: 5px solid #ffd800; min-height: 650px; background: #ffffff">
            <div class="news" id="TinMoiNhat"></div>
              <div class="view-all">
                <a href="/ThongTin/ThongBao?CatID=5">Xem tất cả</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
