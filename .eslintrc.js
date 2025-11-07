module.exports = {
  extends: [
    'react-app', // Config cơ bản của CRA
    'react-app/jest',
    'plugin:prettier/recommended', // Tích hợp Prettier
  ],
  plugins: ['prettier'],
  rules: {
    // Tắt các rule xung đột với Prettier (nếu có)
    'prettier/prettier': 'warn', // Báo warning nếu code không đúng format

    // (Tùy chọn) Thêm các rule của riêng bạn
    'no-console': 'warn', // Báo warning khi dùng console.log
    'react/self-closing-comp': 'warn', // Báo warning thẻ không tự đóng
  },
};
