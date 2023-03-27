

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Customer",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "phone",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data

 
export const userRows = [
 
 
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    phone: 69021829,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    phone: 690218298,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    phone: 690218290,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    phone: 690218297,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    phone: 690218295,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    phone: 690218294,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    phone: 690218291,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    phone: 690218295,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
];
export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "products",
    headerName: "Products",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "brand",
    headerName: "brand",
    width: 230,
  },

  {
    field: "category",
    headerName: "category",
    width: 100,
  },
  {
    field: "price",
    headerName: "price",
    width: 100,
  },
  {
    field: "status",
    headerName: "status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const productRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "orders",
    headerName: "orders",
    width: 230,
    
  },
  {
    field: "store_id",
    headerName: "store",
    width: 230,
    
  },
  {
    field: "staff_id",
    headerName: "staff",
    width: 230,
    
  },
  {
    field: "last_updated",
    headerName: "order_date",
    width: 230,
    
  },

];
// temporary order data

export const orderRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    phone: 69021829,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    phone: 690218298,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    phone: 690218290,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    phone: 690218297,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    phone: 690218295,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    phone: 690218294,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    phone: 690218291,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    phone: 690218295,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
];

export const categoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "category_name",
    headerName: "category name",
    width: 230,
    
  },
  {
    field: "Date",
    headerName: "Date",
    width: 230,
    
  },
];
export const categoryRows =[
  {
    id:1,
    category_name:"HP",
    Date: "09-01-2022"

  },
  {
    id:2,
    category_name:"Dell",
    Date: "09-01-2022"
  },
  {
    id:3,
    category_name:"acer",
    Date: "09-01-2022"

  },
  {
    id:4,
    category_name:"windows",
    Date: "09-01-2022"

  },
  {
    id:5,
    category_name:"win",
    Date: "09-01-2022"

  },
  {
    id:6,
    category_name:"HP-WINDOWS",
    Date: "09-01-2022"

  },

];

export const brandColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "brand_name",
    headerName: "brand name",
    width: 230,
    
  },
  
  {
    field: "Date",
    headerName: "Date",
    width: 230,
    
  },
];
export const brandRows =[
  {
    id:1,
    brand_name:"HP",
    Date: "09-01-2022"

  },
  {
    id:2,
    brand_name:"Dell",
    Date: "09-01-2022"

  },
  {
    id:3,
    brand_name:"acer",
    Date: "09-01-2022"

  },
  {
    id:4,
    brand_name:"windows",
    Date: "09-01-2022"

  },
  {
    id:5,
    brand_name:"win",
    Date: "09-01-2022"

  },
  {
    id:6,
    brand_name:"HP-WINDOWS",
    Date: "09-01-2022"

  },

];
export const storeColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "stores",
    headerName: "stores",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "phone",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const storeRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    phone: 69021829,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    phone: 690218298,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    phone: 690218290,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    phone: 690218297,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    phone: 690218295,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    phone: 690218294,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    phone: 690218291,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    phone: 690218295,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
];
export const staffColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "staff",
    headerName: "staff",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "phone",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const staffRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    phone: 69021829,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    phone: 690218298,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    phone: 690218290,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    phone: 690218297,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    phone: 690218295,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    phone: 690218294,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    phone: 690218291,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    phone: 690218295,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
];
export const stockColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "stock",
    headerName: "Stock",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "product",
    headerName: "product",
    width: 230,
  },
  {
    field: "quantity",
    headerName: "quantity",
    width: 230,
  },

 
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const stockRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    phone: 69021829,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    phone: 690218298,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    phone: 690218290,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "4snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    phone: 690218297,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "6snow@gmail.com",
    status: "active",
    phone: 690218295,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    phone: 690218294,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "8snow@gmail.com",
    status: "active",
    phone: 690218291,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "pending",
    phone: 690218295,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    email: "snow@gmail.com",
    status: "active",
    phone: 690218296,
  },
];