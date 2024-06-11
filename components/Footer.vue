<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[30px]"
      >
        <div>
          <h2 class="text-xl font-bold mb-4">Information</h2>
          <div><img :src="img" alt="" class="w-[100px] object-cover" /></div>
          <p>Trường Đại học Đại Nam</p>
          <p>Địa chỉ: Số 1, Phố Xốm, Phú Lãm, Hà Đông, Thành phố Hà Nội</p>
          <p>Điện thoại: (024) 35577799</p>
          <p>Email: dainam@university.edu.vn</p>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4">Links</h2>
          <ul>
            <li>
              <a href="https://dainam.edu.vn/" target="_blank">About Us</a>
            </li>
            <li><a href="https://ttsinhvien.dainam.edu.vn/">Home</a></li>
            <li><a href="#">Education Program</a></li>
            <li><a href="#">Hotline</a></li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4">Follow Us</h2>
          <p>
            Theo dõi chúng tôi trên các mạng xã hội để cập nhật thông tin mới
            nhất.
          </p>
          <div class="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/DAINAM.EDU.VN"
              target="_blank"
              class="text-white hover:text-gray-300 text-2xl"
              ><i class="ri-facebook-circle-fill text-[40px]"></i
            ></a>
            <a href="#" class="text-white hover:text-gray-300 text-2xl"
              ><i class="ri-twitter-line text-[40px]"></i>
            </a>
            <a href="#" class="text-white hover:text-gray-300 text-2xl"
              ><i class="ri-instagram-line text-[40px]"></i>
            </a>
            <!-- <a href="#" class="text-white hover:text-gray-300 text-2xl"
              ><i class="fab fa-instagram text-[40px]"></i
            ></a> -->
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4">Get News</h2>
          <p>
            Đăng ký nhận tin tức để nhận được thông báo về các sự kiện mới nhất
            của trường.
          </p>
          <form class="mt-4">
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              class="bg-gray-700 text-white px-4 py-2 rounded-md w-full"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 block w-full"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      <div class="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29808.964895158733!2d105.757789!3d20.947671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452eaa9c461c3%3A0x2a3e1c421f299adc!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyDEkOG6oWkgTmFt!5e0!3m2!1svi!2sus!4v1711880013718!5m2!1svi!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Trường Đại học Đại Nam. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import img from "@/assets/images/_636903097234341637.png";
</script>

<style></style>
