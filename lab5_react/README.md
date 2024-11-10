# Project Name - User Interaction Screens and API Integration

Dự án này bao gồm các API và màn hình giao diện người dùng nhằm thực hiện các yêu cầu tương tác và xử lý dữ liệu từ người dùng.

## Mục lục

- [Yêu cầu cài đặt](#yêu-cầu-cài-đặt)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu hình API](#cấu-hình-api)
- [Mô tả các câu hỏi và yêu cầu chức năng](#mô-tả-các-câu-hỏi-và-yêu-cầu-chức-năng)
- [Chi tiết các màn hình](#chi-tiết-các-màn-hình)
- [Thông tin bổ sung](#thông-tin-bổ-sung)

# Mô tả các câu hỏi và yêu cầu chức năng

## Câu 01: Thiết lập Màn Hình Screen_01
- Tạo giao diện người dùng (2 lần commit)
- Commit 1: feat: tạo giao diện cho Screen_01
- Commit 2: feat: thêm chức năng cho nút GET STARTED
- Chi tiết:
- Màn hình Screen_01 gồm một ô nhập tên và nút GET STARTED.
- Khi nhập tên và nhấn GET STARTED, sẽ chuyển sang Screen_02, hiển thị lời chào "Hi" kèm tên.
## Câu 02: Thiết lập Màn Hình Screen_02
- Cấu trúc commit cho giao diện và chức năng (5 lần commit)

- Commit 1: feat: tạo giao diện cho Screen_02
- Commit 2: feat: hiển thị danh sách từ array (a)
- Commit 3: feat: chức năng tìm kiếm (b)
- Commit 4: feat: thêm chức năng tạo công việc mới (c)
- Commit 5: feat: chỉnh sửa công việc (d)
- Chi tiết:

- a. Khi ứng dụng khởi chạy, hiển thị danh sách công việc từ mảng có sẵn trên màn hình Screen_02.
- b. Chức năng tìm kiếm: khi người dùng nhập từ khóa vào ô Search, danh sách công việc sẽ lọc và hiển thị các mục liên quan.
- c. Nhấn vào biểu tượng +: mở màn hình Screen_03 để thêm công việc mới. Nhập nội dung công việc và nhấn Finish để thêm vào danh sách trên Screen_02.
- d. Nhấn biểu tượng Edit: hiển thị Screen_03 với nội dung công việc hiện tại, tiêu đề đổi thành "EDIT YOUR JOB". Sau khi chỉnh sửa, nhấn Finish để cập nhật công việc trong danh sách.
- Chi tiết các màn hình
- Screen_01: Màn hình ban đầu với ô nhập tên và nút GET STARTED.
- Screen_02: Màn hình chính hiển thị danh sách công việc, có chức năng tìm kiếm, thêm và chỉnh sửa công việc.
- Screen_03: Màn hình thêm hoặc chỉnh sửa công việc, có thể nhập nội dung mới hoặc cập nhật nội dung đã có.
- Thông tin bổ sung
- Để biết thêm chi tiết về việc sử dụng và cấu hình các API, vui lòng tham khảo tài liệu API chi tiết.

> Lưu ý: Thay thế `[link-to-api-docs](https://671e74d61dfc429919825dfc.mockapi.io/taks)` bằng đường dẫn thực tế đến tài liệu API nếu có.
