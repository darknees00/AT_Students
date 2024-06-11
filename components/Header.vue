<script setup lang="ts">
import { ref } from "vue";
import img from "@/assets/images/logo_header.png";
import imgMB from "@/assets/images/logo_header_mobile.png";

// import flag_vi from "./images/svg/vn.svg";
// import flag_gb from "./images/svg/gb.svg";
const { t, setLocale } = useI18n();

const isOpen = ref<any>({});
const isMenuMobileOpen = ref(false);

const locale = [
  {
    title: "VietNamese",
    value: "vi",
    icon: "./images/svg/vn.svg",
  },
  {
    title: "English",
    value: "en",
    icon: "./images/svg/gb.svg",
  },
];

// const data = ref<any[]>([]);
// const loadData = async () => {
//   data.value = await $fetch("/DepartmentSchedule", {
//     method: "GET",
//     baseURL: "https://localhost:44356/api",
//   });
// };

// onBeforeMount(async () => {
//   await loadData();
// });

const selectLocale = ref(0);

function changeLocale(index: number) {
  selectLocale.value = index;
  setLocale(locale[index].value);
}
</script>

<template>
  <section class="xl:block hidden fixed top-0 w-full z-[9999]">
    <div class="relative z-[1000] bg-white">
      <div class="container mx-auto flex items-center justify-between">
        <img :src="img" class="h-[100px] object-cover" alt="" />

        <div
          class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
        >
          <img class="w-[36px]" :src="locale[selectLocale].icon" alt="" />

          <ul
            class="w-[160px] text-[14px] absolute top-[120px] group-hover:top-[120%] bg-white group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear p-2 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
          >
            <li
              v-for="(item, index) in locale"
              :key="index"
              @click="changeLocale(index)"
              class="flex items-center gap-2 py-[6px] px-[12px] rounded-[10px] transition-all duration-300 ease cursor-pointer hover:bg-slate-200"
            >
              <img class="w-[20px]" :src="item.icon" alt="" />
              {{ $t(item.title) }}
            </li>
          </ul>
        </div>
        <!-- <select v-model="selectLocale">
          <option
            v-for="(item, index) in locale"
            :key="index"
            :value="item.value"
          >
            {{ item.title }}
          </option>
        </select> -->
      </div>
    </div>

    <div class="bg-gray-800 text-white">
      <header
        class="container mx-auto flex items-center justify-between gap-5 py-2"
      >
        <ul class="flex items-center gap-4 flex-1">
          <li>
            <nuxt-link
              to="/"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-home-3-line"></i>
              {{ $t("Home") }}
            </nuxt-link>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-book-read-line"></i>
              {{ $t("Education Program") }}
            </nuxt-link>

            <div
              class="absolute top-[120px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear w-[228px] text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="/Department/DepartmentScheduleld"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                    ><i class="ri-school-fill"></i>
                    {{ $t("School") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="/Department/MainMajor"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                    ><i class="ri-book-marked-fill"></i>
                    {{ $t("Main Major") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                    ><i class="ri-book-2-fill"></i>
                    {{ $t("Second Major") }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-draft-line"></i>
              {{ $t("Register") }}
            </nuxt-link>
            <div
              class="absolute top-[120px] w-[250px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="/RegisterForStudy/StudyMainMajor"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Study Main Major") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Study Second Major") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Register For Extra") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Register For Elective Courses") }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-user-line"></i>
              {{ $t("Student") }}
            </nuxt-link>

            <div
              class="absolute top-[120px] w-[300px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="/Student/Information"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Profile") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="/Student/PointPractise"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Point Practise") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="/Student/AggregateScores"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    {{ $t("Look Up Aggregate Scores") }}
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="/Student/Schedule"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Tra cứu lịch học
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="/Student/TestSchedule"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Tra cứu lịch thi
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Học bổng - Khen thưởng - Kỷ luật
                  </nuxt-link>
                </li>

                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Thông tin sinh viên tốt nghiệp
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Chuyện Sinh Viên
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-draft-line"></i>
              Đánh Giá
            </nuxt-link>
            <div
              class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="/Evaluate/AssessmentSurvey"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Khảo sát đánh giá
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-news-line"></i>
              Thông Tin
            </nuxt-link>

            <div
              class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Tin mới nhất
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Thông báo
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Văn bản biểu mẫu
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent"
          >
            <nuxt-link
              to="#"
              class="font-semibold hover:text-primary transition duration-200 ease-linear"
            >
              <i class="ri-wallet-line"></i>
              Thông Tin Tài Chính
            </nuxt-link>
            <div
              class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
            >
              <ul>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Xem thông tin học phí
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Học phí trực tuyến
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Kết quả phiếu chi
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link
                    to="#"
                    class="font-medium hover:text-primary transition duration-200 ease-linear"
                  >
                    Khoản học phí khác
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <nuxt-link
          class="font-semibold hover:text-primary transition duration-200 ease-linear"
          to="login"
        >
          <i class="ri-login-box-line"></i> Đăng Nhập</nuxt-link
        >
      </header>
    </div>
  </section>

  <!-- đây là header của mobile -->
  <section
    class="xl:hidden block bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <figure>
        <img :src="imgMB" class="h-[60px] object-cover" alt="" />
      </figure>

      <button @click="isMenuMobileOpen = true">
        <i class="ri-menu-3-line text-[26px]"></i>
      </button>
    </div>

    <div
      :class="isMenuMobileOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'"
      class="fixed z-10 w-full transition-all max-w-[340px] h-screen bg-white top-0"
    >
      <div class="py-2 px-3 flex items-center justify-between font-semibold">
        <nuxt-link to="#">Đăng Nhập</nuxt-link>
        <button
          @click="isMenuMobileOpen = false"
          class="w-[30px] h-[30px] bg-primary text-white"
        >
          <i class="ri-close-line"></i>
        </button>
      </div>
      <ul class="">
        <li>
          <nuxt-link
            to="#"
            class="font-semibold hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex border-b-[1px] border-solid border-gray-200"
          >
            <i class="ri-home-3-line"></i>
            Trang Chủ
          </nuxt-link>
        </li>
        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-book-read-line"></i>
            Chương Trình Đào Tạo
          </nuxt-link>
          <button
            @click="
              isOpen.item2
                ? (isOpen.item2 = !isOpen.item2)
                : (isOpen.item2 = true)
            "
            type="button"
            :class="isOpen?.item2 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item2 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Toàn trường
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="/Department/MainMajor"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Chuyên ngành chính
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Chuyên ngành thứ 2
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-draft-line"></i>
            Đăng kí
          </nuxt-link>
          <button
            @click="
              isOpen.item3
                ? (isOpen.item3 = !isOpen.item3)
                : (isOpen.item3 = true)
            "
            type="button"
            :class="isOpen?.item3 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item3 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Học chuyên ngành chính
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Học chuyên ngành thứ 2
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Đăng ký môn học sớm
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Đăng ký môn học tự chọn
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-user-line"></i>
            Sinh Viên
          </nuxt-link>
          <button
            @click="
              isOpen.item4
                ? (isOpen.item4 = !isOpen.item4)
                : (isOpen.item4 = true)
            "
            type="button"
            :class="isOpen?.item4 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item4 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="/pages/Student/Information"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Thông tin cá nhân
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Điểm danh cho lớp
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Tra cứu điểm tống hợp
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Tra cứu lịch học
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Tra cứu lịch thi
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Học bổng - Khen thưởng - Kỷ luật
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Thông tin sinh viên tốt nghiệp
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Chuyện Sinh Viên
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-draft-line"></i>
            Đánh giá
          </nuxt-link>
          <button
            @click="
              isOpen.item5
                ? (isOpen.item5 = !isOpen.item5)
                : (isOpen.item5 = true)
            "
            type="button"
            :class="isOpen?.item5 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item5 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Khảo sát đánh giá
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-news-line"></i>
            Thông Tin
          </nuxt-link>
          <button
            @click="
              isOpen.item6
                ? (isOpen.item6 = !isOpen.item6)
                : (isOpen.item6 = true)
            "
            type="button"
            :class="isOpen?.item6 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item6 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Tin mới nhất
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Thông báo
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Văn bản biểu mẫu
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link
            to="#"
            class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex"
          >
            <i class="ri-wallet-line"></i>
            Thông Tin Tài Chính
          </nuxt-link>
          <button
            @click="
              isOpen.item7
                ? (isOpen.item7 = !isOpen.item7)
                : (isOpen.item7 = true)
            "
            type="button"
            :class="isOpen?.item7 ? 'rotate-180 text-primary' : ''"
            class="absolute right-4 top-3 w-[30px] h-[30px] transition-all"
          >
            <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul
            class="list-disc ml-[40px] transition-all"
            :class="isOpen?.item7 ? '' : 'hidden'"
          >
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Xem thông tin học phí
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Học phí trực tuyến
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="#"
                class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear"
              >
                Khoản học phí khác
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- overlay -->
    <div
      @click="isMenuMobileOpen = false"
      :class="isMenuMobileOpen ? 'block' : 'hidden'"
      class="fixed top-0 z-1 bg-black/50 w-full h-full"
    ></div>
  </section>

  <!-- margin ở đây -->
  <div class="mb-[140px] xl:block hidden"></div>
</template>

<style scoped>
.header-top {
  background-image: url("./logo_header.png");
}
</style>
