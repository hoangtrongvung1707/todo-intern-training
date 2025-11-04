# Quy ước Commit (Commit Convention)

Repo này tuân thủ Quy ước Conventional Commits.

## Cấu trúc Commit Message

` <type>(<scope>): <description> `

### 1. Type (Loại thay đổi) - BẮT BUỘC

| Type | Mục đích | Ví dụ |
| :--- | :--- | :--- |
| **feat** | Thêm một tính năng mới. | `feat(task): add priority field to model` |
| **fix** | Sửa một lỗi (bug). | `fix(auth): fix token expiration time` |
| **docs** | Thay đổi tài liệu (README, policy docs). | `docs: add commit convention guide` |
| **style** | Thay đổi định dạng code (không thay đổi logic). | `style: apply semicolon rules` |
| **refactor** | Thay đổi cấu trúc code. | `refactor(client): simplify api calls` |
| **chore** | Cập nhật công cụ, thư viện, hoặc quy trình build. | `chore: update react-scripts dependency` |
| **test** | Thêm hoặc sửa test. | `test(api): add validation test` |
| **perf** | Cải thiện hiệu suất. | `perf: optimize image loading` |

### 2. Scope (Phạm vi) - KHÔNG BẮT BUỘC

Phần này chỉ rõ phần nào của dự án bị ảnh hưởng (ví dụ: `server`, `client`, `db`, `auth`).

* Ví dụ: `feat(server): setup initial express app`

### 3. Description (Mô tả) - BẮT BUỘC

* Ngắn gọn (dưới 50 ký tự nếu có thể).
* Viết ở thì hiện tại, thể mệnh lệnh (e.g., "fix bug" thay vì "fixed bug").
* KHÔNG viết hoa chữ cái đầu và KHÔNG kết thúc bằng dấu chấm.

* Ngắn gọn (dưới 50 ký tự nếu có thể).
* Viết ở thì hiện tại, thể mệnh lệnh (e.g., "fix bug" thay vì "fixed bug").
* KHÔNG viết hoa chữ cái đầu và KHÔNG kết thúc bằng dấu chấm.
