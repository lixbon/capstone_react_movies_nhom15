import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export const contactIcon = [
  {
    id: 1,
    icon: <FaFacebookSquare size={30} className="text-blue-500" />,
    style: "  hover:shadow-blue-700",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <FaYoutube size={30} className="text-red-500" />,
    style: "  hover:shadow-red-700",
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    icon: <FaInstagram size={30} className="text-orange-500" />,
    style: "  hover:shadow-red-700",
    link: "https://www.instagram.com/",
  },
  {
    id: 4,
    icon: <FaTelegramPlane size={30} className="text-green-500" />,
    style: " hover:shadow-green-500",
    link: "https://web.telegram.org/",
  },
];

export const footerContent = [
  {
    brand: "CyberSoftCinema",
    content: [
      "Giới thiệu",
      "Tiện ích online",
      "Thẻ quà tặng",
      "Tuyển dụng",
      "Liên hệ quảng cáo",
    ],
  },
  {
    brand: "Điều khoản sử dụng",
    content: [
      "Điều Khoản Chung",
      "Điều Khoản Giao Dịch",
      "Chính Sách Thanh Toán",
      "Chính Sách Bảo Mật",
      "Câu Hỏi Thường Gặp",
    ],
  },
  {
    brand: " Chăm sóc khách hàng",
    content: [
      "Hotline: 1900 6017",
      "Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết",
      "Email hỗ trợ: hoidap@cgv.vn",
    ],
  },
];
