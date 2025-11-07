Cấu Trúc Thư Mục Dự Án (Dạng Cây)

Đây là sơ đồ trực quan của toàn bộ cấu trúc dự án, tập trung vào thư mục src/ và ý nghĩa của từng thành phần.

TEN-DU-AN/
├── build/                # Thư mục build (output), không đụng vào.
├── node_modules/         # Thư mục chứa các thư viện (dependencies), không đụng vào.
├── public/               # Chứa file HTML gốc (index.html), favicon.ico, manifest.json.
│
├── src/                  # Nơi chứa toàn bộ code của dự án.
│   ├── assets/           # (Presentation) Chứa tài nguyên tĩnh: images, icons, fonts...
│   │
│   ├── components/       # (Presentation) Chứa các component React tái sử dụng.
│   │   ├── ui/           # -> (UI Layer) Component cơ bản nhất: Button, Input, Modal...
│   │   └── shared/       # -> (UI Layer) Component phức tạp hơn: Header, Footer, ProductCard...
│   │
│   ├── contexts/         # (Business Logic) Quản lý state toàn cục: AuthContext, ThemeContext...
│   │
│   ├── hooks/            # (Business Logic) Tái sử dụng logic: useAuth, useFetch...
│   │
│   ├── layouts/          # (Presentation) Bố cục chung của trang: MainLayout, AuthLayout...
│   │
│   ├── pages/            # (Presentation) Các trang hoàn chỉnh, map với routes: HomePage...
│   │
│   ├── routes/           # (Business Logic) Định nghĩa và cấu hình các đường dẫn (routes).
│   │
│   ├── services/         # (Data) Xử lý logic giao tiếp API: authService, productService...
│   │
│   ├── styles/           # (Presentation) Chứa các file SASS/CSS toàn cục.
│   │   ├── _mixins.sass    # -> Định nghĩa các SASS mixin dùng chung.
│   │   └── _variables.sass # -> Định nghĩa các biến SASS (màu sắc, font...).
│   │
│   ├── types/            # (Data) Định nghĩa các interface và type của TypeScript: IUser, IProduct...
│   │
│   ├── utils/            # (Business Logic) Các hàm tiện ích nhỏ, thuần túy: formatDate, validators...
│   │
│   ├── App.module.sass   # File SASS module cho App.tsx (style cục bộ).
│   ├── App.tsx           # Component gốc, chứa logic <BrowserRouter> và render <Routes>.
│   ├── index.sass        # File style toàn cục, import _variables, _mixins và reset CSS.
│   ├── index.tsx         # File đầu vào (entry point), render <App /> vào DOM.
│   ├── react-app-env.d.ts # File định nghĩa type cho CRA, giữ nguyên.
│   └── setupTests.ts     # File cấu hình cho Jest (testing), giữ nguyên.
│
├── .env.development      # Biến môi trường cho môi trường npm start.
├── .env.example          # Biến môi trường mẫu (để commit lên Git).
├── .env.production       # Biến môi trường cho môi trường npm build.
├── .eslintrc.js          # File cấu hình ESLint (kiểm tra lỗi code).
├── .gitignore            # File chỉ định các file/folder Git sẽ bỏ qua.
├── .prettierrc           # File cấu hình Prettier (định dạng code).
├── package.json          # Quản lý dependencies và scripts của dự án.
├── package-lock.json     # "Khóa" phiên bản của các dependencies.
├── README.md             # File hướng dẫn chung về dự án.
└── tsconfig.json         # File cấu hình TypeScript (bao gồm cả alias paths)


| 1️⃣ Presentation Layer (Hiển thị & UI)    | Xử lý giao diện, bố cục, trải nghiệm người dùng.                      | `components/`, `layouts/`, `pages/`, `assets/`, `styles/` |
| 2️⃣ Business Logic Layer (Xử lý nghiệp vụ)| Quản lý logic ứng dụng, state, hooks, route và các quy tắc hoạt động. | `contexts/`, `hooks/`, `routes/`, `utils/`                |
| 3️⃣ Data Layer (Dữ liệu & Kết nối)        | Quản lý dữ liệu, API, và kiểu dữ liệu (types).                        | `services/`, `types/`                                     |

User Action (UI) 
    ↓
Component / Page gọi Logic qua Hook hoặc Context 
    ↓
Hook / Context gọi Service để fetch hoặc xử lý Data 
    ↓
Service giao tiếp API, trả dữ liệu về 
    ↓
Context/Hook cập nhật lại State 
    ↓
UI render lại với Data mới

1. assets/

Chứa tài nguyên tĩnh không thay đổi: hình ảnh, biểu tượng, phông chữ.

Không chứa logic hay code xử lý.

Dùng trong UI hoặc layout (VD: logo, background).

2. components/

Chứa React components tái sử dụng, được chia làm 2 nhóm:

Thư mục con	Vai trò	Ví dụ
ui/	Component cơ bản, nhỏ, dùng nhiều nơi.	Button, Input, Modal, Spinner
shared/	Component phức tạp hơn, thường kết hợp nhiều UI component.	Header, Footer, ProductCard, Sidebar

📘 Mục đích: giúp UI thống nhất và dễ bảo trì.

3. contexts/

Dùng React Context API để quản lý state toàn cục.

Ví dụ: AuthContext, ThemeContext, CartContext.

Cung cấp dữ liệu chung cho toàn app mà không cần truyền props sâu.

Nằm giữa tầng Business Logic và Presentation.

4. hooks/

Chứa các custom hooks để tái sử dụng logic.

Tách riêng logic khỏi UI để dễ test và tái sử dụng.

Ví dụ:

useAuth() → xử lý đăng nhập, đăng xuất.

useFetch(url) → fetch dữ liệu chung.

useTheme() → đổi giao diện sáng/tối.

5. layouts/

Xác định bố cục chung của từng loại trang (header, footer, sidebar...).

Dùng để wrap các page.

Ví dụ:

MainLayout → dùng cho các trang chính (Home, Product,...)

AuthLayout → dùng cho trang đăng nhập/đăng ký.

6. pages/

Mỗi file tương ứng 1 trang hoàn chỉnh trong app.

Các trang này map với routes (VD: /login, /home).

Mỗi page có thể:

Gọi dữ liệu qua hooks hoặc context.

Render UI bằng các component từ components/.

7. routes/

Định nghĩa và quản lý các tuyến đường (routes).

Chứa:

File index.tsx hoặc AppRoutes.tsx: cấu hình toàn bộ route.

Có thể tách riêng route theo module: authRoutes.ts, dashboardRoutes.ts.

Liên kết giữa tầng UI (pages) và logic điều hướng (React Router).

8. services/

Chứa logic giao tiếp với API.

Thông qua các hàm như getProducts(), loginUser(), updateProfile().

Mỗi service tương ứng 1 module dữ liệu: authService, productService, userService.

Tầng này kết nối với server backend (REST API).

9. styles/

Quản lý style toàn cục và biến SASS:

    _variables.sass → màu sắc, font, kích thước.

    _mixins.sass → các hàm SASS tái sử dụng.

    index.sass → style global (reset CSS, import biến & mixin).

Dễ mở rộng, đồng bộ theme toàn app.

10. types/

Chứa định nghĩa TypeScript interface và type cho toàn dự án.

Ví dụ:

IUser → định nghĩa kiểu dữ liệu người dùng.

IProduct → kiểu sản phẩm.

Giúp IDE (VSCode) gợi ý, hạn chế lỗi runtime.

11. utils/

Chứa các hàm tiện ích không phụ thuộc vào UI.

Ví dụ:

formatDate(date), validateEmail(), getLocalStorage().

Giúp tránh lặp code và tách biệt xử lý logic nhỏ gọn.


iV. File gốc trong src/

| File                 | Vai trò                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `App.tsx`            | Component gốc của app, chứa `<BrowserRouter>` và render `<Routes>`.     |
| `App.module.sass`    | Style riêng cho App.                                                    |
| `index.tsx`          | Điểm khởi động chính — render `<App />` vào `#root` trong `index.html`. |
| `index.sass`         | Style toàn cục, import biến và reset.                                   |
| `setupTests.ts`      | Cấu hình Jest cho unit test.                                            |
| `react-app-env.d.ts` | Type cho CRA, không chỉnh sửa.                                          |


V. Luồng hoạt động tổng thể (Flow tổng quan)
1️⃣ User truy cập URL → React Router định tuyến đến Page tương ứng.
2️⃣ Page sử dụng Layout để tạo khung trang.
3️⃣ Page gọi các Hooks / Context để lấy dữ liệu.
4️⃣ Hook / Context gọi Service để request API.
5️⃣ Service trả dữ liệu → Context cập nhật state toàn cục.
6️⃣ Component render lại giao diện theo dữ liệu mới.