<template class="z index">
    <div class="isolate bg-white w-full md:grid-cols-3 gap-4 -mb-96 mt-40">
        <div class="border border-blue-500 rounded-lg p-4 mb-96 mx-4 md:mx-10">
            <h1 class="flex justify-center text-red-600">Sinh viên cần tiến hành đánh giá môn học cần xem điểm</h1>
            <div class="flex space-x-36">
                <div>
                    <label for="msv" class="block text-sm font-semibold leading-6 text-black">Mã sinh viên: </label>
                    <div class="mt-2.5">
                    <p type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">1451020262</p>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded shadow">
                <h3 class="text-lg font-bold mb-4">Danh sách điểm học phần đã học</h3>
                <div class="flex flex-wrap items-center justify-evenly md:justify-between">
                    <div class="w-full md:w-auto md:flex md:space-x-36">
                        <label for="xl4" class="block text-sm font-semibold leading-6 text-black">Xếp loại học tập(Hệ 4): </label>
                        <label for="xl10" class="block text-sm font-semibold leading-6 text-black">Xếp loại học tập(Hệ 10): <a class="text-red-600">Khá</a></label>
                        <label for="tbcht4" class="block text-sm font-semibold leading-6 text-black">TBC học tập(Hệ 4): <a class="text-red-600">3.44</a></label>
                    </div>

                    <div class="w-full md:w-auto md:flex md:space-x-36">
                        <label for="tbctc4" class="block text-sm font-semibold leading-6 text-black">TBC tích lũy(Hệ 4): <a class="text-red-600">3.44</a></label>
                        <label for="stctl" class="block text-sm font-semibold leading-6 text-black">Số tín chỉ tích lũy: <a class="text-red-600">30/30</a></label>
                        <label for="stcht" class="block text-sm font-semibold leading-6 text-black">Số tín chỉ học tập: <a class="text-red-600">30</a></label>
                        <label for="tbctl10" class="block text-sm font-semibold leading-6 text-black">TBC tích lũy(Hệ 10): <a class="text-red-600">7.31</a></label>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-green-400">
                                <th class="border p-2">STT</th>
                                <th class="border p-2">Ký hiệu</th>
                                <th class="border p-2">Tên học phần</th>
                                <th class="border p-2">Tên học phần tương đương</th>
                                <th class="border p-2">Số tín chỉ</th>
                                <th class="border p-2">Điểm thành phần</th>
                                <th class="border p-2">Điểm thi</th>
                                <th class="border p-2">TBCHP</th>
                                <th class="border p-2">Điểm số</th>
                                <th class="border p-2">Điểm chữ</th>
                                <th class="border p-2">Ghi chú</th>
                                <th class="border p-2">Môn tự chọn</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td class="border p-2">1</td>
                                    <td class="border p-2">077CQ2bQTMA</td>
                                    <td class="border p-2">Quản trị mạng</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 8  - KT1 : 8  - CC : 8  </td>
                                    <td class="border p-2">6.5</td>
                                    <td class="border p-2">7</td>
                                    <td class="border p-2">2.5</td>
                                    <td class="border p-2 text-center">B</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">2</td>
                                    <td class="border p-2">077CQ2bQDTT</td>
                                    <td class="border p-2">Quản trị dự án công nghệ thông tin</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 8.5  - KT1 : 8.5  - CC : 10  </td>
                                    <td class="border p-2">7</td>
                                    <td class="border p-2">8</td>
                                    <td class="border p-2">3</td>
                                    <td class="border p-2 text-center">B+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">3</td>
                                    <td class="border p-2">077CQ2bHoMa</td>
                                    <td class="border p-2">Học máy</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">CC : 9  - KT2 : 7  - KT1 : 6  </td>
                                    <td class="border p-2">6</td>
                                    <td class="border p-2">6.5</td>
                                    <td class="border p-2">2.25</td>
                                    <td class="border p-2 text-center">C+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">4</td>
                                    <td class="border p-2">077CQ2bLTMo</td>
                                    <td class="border p-2">Lập trình Mobile</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 8  - CC : 10  - KT1 : 8</td>
                                    <td class="border p-2">7.5</td>
                                    <td class="border p-2">8</td>
                                    <td class="border p-2">3</td>
                                    <td class="border p-2 text-center">B+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">5</td>
                                    <td class="border p-2">PT IoT</td>
                                    <td class="border p-2">Phát triển ứng dụng IoT</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT1 : 9  - KT2 : 8  - CC : 10  </td>
                                    <td class="border p-2">10</td>
                                    <td class="border p-2">9.5</td>
                                    <td class="border p-2">3.75</td>
                                    <td class="border p-2 text-center">A+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">6</td>
                                    <td class="border p-2">077CQ2bLTWe1</td>
                                    <td class="border p-2">Lập trình web 1</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 7  - CC : 9  - KT1 : 7  </td>
                                    <td class="border p-2">5.5</td>
                                    <td class="border p-2">6.5</td>
                                    <td class="border p-2">2.25</td>
                                    <td class="border p-2 text-center">C+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">7</td>
                                    <td class="border p-2">077CQĐASO</td>
                                    <td class="border p-2">Đại số</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 7  - CC : 9  - KT1 : 7  </td>
                                    <td class="border p-2">5</td>
                                    <td class="border p-2">5</td>
                                    <td class="border p-2">2</td>
                                    <td class="border p-2 text-center">D+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">8</td>
                                    <td class="border p-2">007CQLLCT1</td>
                                    <td class="border p-2">Triết học Mac - Lênin</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 7  - CC : 9  - KT1 : 7  </td>
                                    <td class="border p-2">7</td>
                                    <td class="border p-2">8</td>
                                    <td class="border p-2">3</td>
                                    <td class="border p-2 text-center">B+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>

                                <tr>
                                    <td class="border p-2">9</td>
                                    <td class="border p-2">077CQ2bLTJa</td>
                                    <td class="border p-2">Lập trình Java</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 7  - CC : 9  - KT1 : 7  </td>
                                    <td class="border p-2">5.5</td>
                                    <td class="border p-2">6.5</td>
                                    <td class="border p-2">2.25</td>
                                    <td class="border p-2 text-center">C+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>     
                                
                                <tr>
                                    <td class="border p-2">10</td>
                                    <td class="border p-2">047CQTASP1</td>
                                    <td class="border p-2">Tiếng Anh P1</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2 text-center">3</td>
                                    <td class="border p-2">KT2 : 7  - CC : 9  - KT1 : 7  </td>
                                    <td class="border p-2">8</td>
                                    <td class="border p-2">7</td>
                                    <td class="border p-2">2.25</td>
                                    <td class="border p-2 text-center">B+</td>
                                    <td class="border p-2"></td>
                                    <td class="border p-2"></td>
                                </tr>                       
                            </tbody>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>