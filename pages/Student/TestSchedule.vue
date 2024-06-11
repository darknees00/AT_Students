<template>
    <div class="w-full md:grid-cols-3 gap-4 -mb-96 mt-40">
        <h1 class="flex ml-16 text-blue-500">Trang chủ/Lịch thi</h1>
        <div class="border border-blue-500 rounded-lg p-4 mb-96 mx-4 md:mx-10">
            <div class="flex space-x-36">
                <div>
                    <label for="hocky" class="block text-sm font-semibold leading-6 text-black">Học kỳ </label>
                    <div class="mt-2.5">
                    <p type="text" name="hocky" id="hocky" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 *:">Kỳ 2</p>
                    </div>
                </div>

                <div>
                    <label for="namhoc" class="block text-sm font-semibold leading-6 text-black">Năm học </label>
                    <div class="mt-2.5">
                    <p type="text" name="namhoc" id="namhoc" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">2023-2024</p>
                    </div>
                </div>

                <div>
                    <label for="dothoc" class="block text-sm font-semibold leading-6 text-black">Đợt học </label>
                    <div class="mt-2.5">
                    <p type="text" name="dothoc" id="dothoc" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Đợt 1</p>
                    </div>
                </div>

                <div>
                    <label for="nganhhoc" class="block text-sm font-semibold leading-6 text-black">Ngành học </label>
                    <div class="mt-2.5">
                    <p type="text" name="nganhhoc" id="nganhhoc" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Chuyên ngành chính</p>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded shadow">
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr>
                                <th class="border p-2">STT</th>
                                <th class="border p-2">Tên học phần</th>
                                <th class="border p-2">Ngày thi</th>
                                <th class="border p-2">Ca thi</th>
                                <th class="border p-2">Giờ thi</th>
                                <th class="border p-2">Lần thi</th>
                                <th class="border p-2">Đợt thi</th>
                                <th class="border p-2">Phòng thi</th>
                                <th class="border p-2">Hình thức</th>
                                <th class="border p-2">Ghi chú thi</th>
                            </tr>
                            
                            <tr>
                                <td class="border p-2">1</td>
                                <td class="border p-2">Học máy</td>
                                <td class="border p-2">16/03/2024</td>
                                <td class="border p-2">Ca 1</td>
                                <td class="border p-2">9h</td>
                                <td class="border p-2">1</td>
                                <td class="border p-2">2</td>
                                <td class="border p-2">P801 GD2</td>
                                <td class="border p-2">Bài tập lớn</td>
                                <td class="border p-2"></td>
                            </tr>

                            <tr>
                                <td class="border p-2">2</td>
                                <td class="border p-2">Quản trị mạng</td>
                                <td class="border p-2">20/03/2024</td>
                                <td class="border p-2">Ca 2</td>
                                <td class="border p-2">14h</td>
                                <td class="border p-2">1</td>
                                <td class="border p-2">2</td>
                                <td class="border p-2">P808 GD2</td>
                                <td class="border p-2">Bài tập lớn</td>
                                <td class="border p-2"></td>
                            </tr>

                            <tr>
                                <td class="border p-2">3</td>
                                <td class="border p-2">Lập trình Mobile</td>
                                <td class="border p-2">25/04/2024</td>
                                <td class="border p-2">Ca 2</td>
                                <td class="border p-2">8h</td>
                                <td class="border p-2">1</td>
                                <td class="border p-2">2</td>
                                <td class="border p-2">P805 GD2</td>
                                <td class="border p-2">Bài tập lớn</td>
                                <td class="border p-2"></td>
                            </tr>

                            <tr>
                                <td class="border p-2">4</td>
                                <td class="border p-2">Tiếng Anh P4</td>
                                <td class="border p-2">04/04/2024</td>
                                <td class="border p-2">Cả ngày</td>
                                <td class="border p-2">7h30p</td>
                                <td class="border p-2">2</td>
                                <td class="border p-2">2</td>
                                <td class="border p-2">P801 GD2</td>
                                <td class="border p-2">Tự luận </td>
                                <td class="border p-2"></td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>