# Chính sách Nhánh (Branching Policy - GitHub Flow)

Repo này sử dụng mô hình Git Flow đơn giản hóa (GitHub Flow).

## 1. Các Nhánh Chính (Long-lived Branches)

### 1.1. `main`
* **Mục đích:** Chứa code đã được kiểm thử, sẵn sàng cho Production.
* **Quy tắc:** CẤM commit trực tiếp. Chỉ cho phép merge qua Pull Request (PR).

### 1.2. `dev`
* **Mục đích:** Chứa code đang trong quá trình phát triển và kiểm thử nội bộ (Staging/Testing).
* **Quy tắc:** Code mới từ các nhánh tính năng phải merge vào đây trước khi được xem xét merge vào `main`.

## 2. Các Nhánh Làm Việc (Short-lived Branches)

* **Quy tắc:** Luôn checkout từ nhánh `dev`.
* **Đặt tên:**
    * **Tính năng mới:** `feature/<tên-tính-năng>` (Ví dụ: `feature/user-onboarding`)
    * **Sửa lỗi:** `fix/<mô-tả-lỗi>` (Ví dụ: `fix/cors-issue`)
    * **Công cụ/Tài liệu:** `chore/docs/<mô-tả>` (Ví dụ: `chore/docs/update-readme`)

## 3. Quy trình Merge
1.  Commit lên nhánh làm việc của bạn.
2.  Tạo Pull Request (PR) từ nhánh làm việc lên nhánh `dev`.
3.  Yêu cầu Review và đảm bảo PR tuân thủ Commit Convention.
4.  Sau khi được duyệt, merge vào `dev`.
5.  Khi code trên `dev` ổn định, tạo PR từ `dev` lên `main`.
