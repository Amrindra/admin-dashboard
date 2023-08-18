import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg",
    lastName: "Habibi",
    firstName: "Eula",
    email: "habibi@gmail.com",
    phone: "423 452 729",
    createdAt: "05.07.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg",
    lastName: "Smith",
    firstName: "John",
    email: "john.smith@example.com",
    phone: "123 456 789",
    createdAt: "10.15.2022",
    verified: true,
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2017/05/31/09/09/woman-2359562_1280.jpg",
    lastName: "Williams",
    firstName: "Emma",
    email: "emma.williams@example.com",
    phone: "555 123 456",
    createdAt: "07.02.2023",
    verified: false,
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg",
    lastName: "Johnson",
    firstName: "Michael",
    email: "michael.johnson@example.com",
    phone: "987 654 321",
    createdAt: "01.12.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_1280.jpg",
    lastName: "Brown",
    firstName: "Olivia",
    email: "olivia.brown@example.com",
    phone: "111 222 333",
    createdAt: "09.05.2023",
    verified: true,
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_1280.jpg",
    lastName: "Jones",
    firstName: "William",
    email: "william.jones@example.com",
    phone: "444 555 666",
    createdAt: "04.30.2023",
    verified: false,
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_1280.jpg",
    lastName: "Miller",
    firstName: "Ava",
    email: "ava.miller@example.com",
    phone: "777 888 999",
    createdAt: "08.20.2022",
    verified: true,
  },
  {
    id: 8,
    img: "https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg",
    lastName: "Davis",
    firstName: "Noah",
    email: "noah.davis@example.com",
    phone: "123 789 456",
    createdAt: "02.28.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_1280.jpg",
    lastName: "Garcia",
    firstName: "Sophia",
    email: "sophia.garcia@example.com",
    phone: "222 444 666",
    createdAt: "11.11.2022",
    verified: false,
  },
  {
    id: 10,
    img: "https://cdn.pixabay.com/photo/2016/11/29/13/00/black-1869685_1280.jpg",
    lastName: "Rodriguez",
    firstName: "Liam",
    email: "liam.rodriguez@example.com",
    phone: "888 999 000",
    createdAt: "06.25.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg",
    lastName: "Martinez",
    firstName: "Isabella",
    email: "isabella.martinez@example.com",
    phone: "333 555 777",
    createdAt: "03.18.2022",
    verified: true,
  },
  {
    id: 12,
    img: "https://cdn.pixabay.com/photo/2020/12/12/17/24/little-egret-5826070_1280.jpg",
    lastName: "Lopez",
    firstName: "James",
    email: "james.lopez@example.com",
    phone: "123 456 789",
    createdAt: "09.01.2022",
    verified: false,
  },
  {
    id: 13,
    img: "https://cdn.pixabay.com/photo/2020/10/12/05/06/elephant-5647723_1280.jpg",
    lastName: "Lee",
    firstName: "Sophia",
    email: "sophia.lee@example.com",
    phone: "555 777 999",
    createdAt: "07.14.2023",
    verified: true,
  },
  {
    id: 14,
    img: "https://cdn.pixabay.com/photo/2020/09/27/23/39/cow-5608144_1280.jpg",
    lastName: "Taylor",
    firstName: "Alexander",
    email: "alexander.taylor@example.com",
    phone: "111 222 333",
    createdAt: "04.05.2023",
    verified: true,
  },
  {
    id: 15,
    img: "https://cdn.pixabay.com/photo/2020/10/12/05/06/elephant-5647723_1280.jpg",
    lastName: "Anderson",
    firstName: "Emily",
    email: "emily.anderson@example.com",
    phone: "999 888 777",
    createdAt: "01.30.2023",
    verified: false,
  },
];

let products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

// GET USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET USER
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

// ADD USER
app.post("/api/users", (req, res) => {
  users.unshift(req.body);
  res.json(users);
});

// DELETE USER
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json("User deleted!");
});

// GET PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});

// ADD PRODUCT
app.post("/api/products", (req, res) => {
  products.unshift(req.body);
  res.json(products);
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
  products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  );
  res.json("Product deleted!");
});

// This only works on localhost or localmacine once we deploy to the server it won't work
if (process.env.API_PORT) {
  app.listen(process.env.API_PORT, () => {
    console.log("Connected to the backend server!");
  });
}

// by exporting the app, we tell the server to grab all the app endpoint
export default app;
