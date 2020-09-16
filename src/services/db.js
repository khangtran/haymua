const db_category = [
  { name: "Điện Gia Dung" },
  { name: "Điện Thoại" },
  { name: "Phụ Kiện - Thiết Bị Số" },
  { name: "Đồ Chơi - Mẹ & Bé" },
  { name: "Làm Đẹp - Sức Khỏe" },
  { name: "Hàng Tiêu Dùng - Thực Phẩm" },
  { name: "Nhà Cửa Đời Sống" },
  { name: "Thời Trang" },
  { name: "Dịch vụ - Thẻ Cào" }
];

const db_product = [
  {
    providerID: "10000213",
    name: "Mì gói",
    price: 100000,
    productID: "10012",
    photo: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/56/99/6b/c146634c481e39b753693a04c4158284.jpg"
    ]
  },
  {
    providerID: "10000213",
    name: "Nokia 9.3 pureview",
    price: 18000000,
    productID: "10013",
    photo: [
      "https://cdn.tgdd.vn/Products/Images/42/220836/nokia-93-600x600.jpg"
    ]
  },
  {
    providerID: "10000218",
    name: "Thẻ sim viettel",
    price: 170000,
    productID: "10014",
    photo: [
      "https://salt.tikicdn.com/cache/w390/ts/product/65/a8/bb/8676c0e78e1dc75670daf8c89f2cc8d3.png"
    ]
  }
];

const db_home = [
  { section: "Nổi bật", items: db_product },
  { section: "Khuyến mãi hôm nay", items: db_product }
];

const db_provider = [
  {
    id: "10000213",
    name: "Khang",
    trustStar: 4,

    numphone: "0397990363",
    email: "tqkhang93@gmail",
    address: ""
  },
  {
    id: "10000215",
    name: "Tèo",
    trustStar: 1,

    numphone: "098990636",
    email: "tqkhang93@gmail",
    address: ""
  },
  {
    id: "10000218",
    name: "Tí",
    trustStar: 2,

    numphone: "090879979",
    email: "tqkhang93@gmail",
    address: ""
  }
];

export var Database = {
  category: db_category,
  product: db_product,
  homepage: db_home,
  provider: db_provider
};
