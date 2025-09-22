
import cheadset from "./cheadset.jpg"
import csmartglass from "./csmartglass.jpg"
import csmartwatch from "./csmartwatch.jpg"
import cvrset from "./cvrset.jpg"
import cwirelesscharger from "./cwirelesscharger.jpg"
import ckeyboard from "./ckeyboard.jpg"


import theadset1 from "./theadset1.jpg"
import tmouse1 from "./tmouse1.jpg"
import tps51 from "./tps51.jpg"
import tsmartwatch1 from "./tsmartwatch1.jpg"
import tvrset1 from "./tvrset1.jpg"
import tkeyboard1 from "./tkeyboard1.jpg"

import tpowerbank1 from "./tpowerbank1.jpg"
import tjoystick1 from "./tjoystick1.jpg"
import tappleairtag1 from "./tappleairtag1.jpg"
import ttracker1 from "./ttracker1.jpg"
import tmousepad1 from "./tmousepad1.jpg"
import tgameheadset1 from "./tgameheadset1.jpg"
import tstreamcontroller1 from "./tstreamcontroller1.jpg"
import tsamssd1 from "./tsamssd1.jpg"
import tjbl1 from "./tjbl1.jpg"
import tcoolingfan1 from "./tcoolingfan1.jpg"
import tnovaheadset1 from "./tnovaheadset1.jpg"
import tadapter1 from "./tadapter1.jpg"
import gamingcat from "./gamingcat.jpg"
import pccomponentscat from "./pccomponentscat.jpg"
import smartdevicesc from "./smartdevicesc.jpg"
import accessoriescat from "./accessoriescat.jpg"
import samsungwatchmain from "./samsungwatchmain.jpg"
import applewatchmain from "./applewatchmain.jpg"
import applewatch2 from "./applewatch2.jpg"


import btbanner from "./btbanner.jpg"

// categories.js
export  const categories = [
  {
    text: "Smartwatches",
    path: "smartwatches",
    image: csmartwatch,
    bgcolor: "from-pink-500 to-purple-600",
  },
  {
    text: "Headphones",
    path: "headphones",
    image: cheadset,
    bgcolor: "from-blue-500 to-cyan-600",
  },
  {
    text: "VR Glasses",
    path: "vr",
    image:cvrset,
    bgcolor: "from-indigo-500 to-violet-600",
  },
  {
    text: "Gaming",
    path: "gaming",
    image: gamingcat,
    bgcolor: "from-green-500 to-emerald-600",
  },
  {
    text: "Chargers & Docks",
    path: "chargers-docks",
    image: cwirelesscharger,
    bgcolor: "from-yellow-500 to-orange-600",
  },
  {
    text: "Smart Devices",
    path: "smart-devices",
    image: smartdevicesc,
    bgcolor: "from-teal-500 to-cyan-700",
  },
  {
    text: "PC Components",
    path: "pc-components",
    image: pccomponentscat,
    bgcolor: "from-teal-500 to-sky-600",
  },
  {
    text: "Accessories",
    path: "accessories",
    image: accessoriescat,
    bgcolor: "from-red-500 to-pink-600",
  },
  

];






export const dummyproducts = [
  // --- Trending Now (Best Seller) ---
  {
    _id: "p1",
    id: 1,
    name: "PlayStation 5",
    path: "/products/playstation-5",
    category: "gaming",
    images: [tps51,tps51,tps51,tps51],
    price: 499,
    oldPrice: 599,
    discount: 15,
    rating: 5,
    description: [
      "Next-gen gaming console",
      "Ultra-fast SSD for instant loading",
      "4K HDR support with Ray Tracing"
    ],
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-10T12:30:00Z",
    inStock: true,
  },
  {
    _id: "p2",
    id: 2,
    name: "Logitech 3S Mouse",
    images: [tmouse1,tmouse1,tmouse1,tmouse1],
    price: 99,
    oldPrice: 129,
    rating: 4.7,
    category: "Accessories",
    path: "/products/mx-master-3s",
    description: [
      "Ergonomic wireless mouse",
      "Fast scrolling with MagSpeed",
      "Perfect for productivity"
    ],
    createdAt: "2025-03-02T09:20:00Z",
    updatedAt: "2025-03-12T14:45:00Z",
    inStock: true,
  },
  {
    _id: "p3",
    id: 3,
    name: "Gaming Keyboard",
    images: [tkeyboard1,tkeyboard1,tkeyboard1,tkeyboard1],
    price: 89,
    oldPrice: 119,
    rating: 4.5,
    category: "Accessories",
    path: "/products/gaming-keyboard",
    description: [
      "RGB backlit mechanical keys",
      "Durable build for long gaming sessions",
      "Customizable macros"
    ],
    createdAt: "2025-03-03T08:10:00Z",
    updatedAt: "2025-03-14T16:00:00Z",
    inStock: true,
  },
  {
    _id: "p4",
    id: 4,
    name: "Anker Portable Charger",
    images: [tpowerbank1,tpowerbank1,tpowerbank1,tpowerbank1],
    price: 59,
    oldPrice: 79,
    rating: 4.6,
    category: "chargers-docks",
    path: "/products/anker-powerbank",
    description: [
      "High-capacity portable charger",
      "Compact and travel-friendly",
      "Fast charging with PowerIQ"
    ],
    createdAt: "2025-03-04T07:00:00Z",
    updatedAt: "2025-03-15T11:40:00Z",
    inStock: true,
  },
  {
    _id: "p5",
    id: 5,
    name: "PS5 DualSense Controller",
    images: [tjoystick1,tjoystick1,tjoystick1,tjoystick1],
    price: 69,
    oldPrice: 79,
    rating: 4.9,
    category: "gaming",
    path: "/products/ps5-controller",
    description: [
      "Immersive haptic feedback",
      "Adaptive triggers for enhanced gameplay",
      "Wireless connectivity"
    ],
    createdAt: "2025-03-05T06:50:00Z",
    updatedAt: "2025-03-15T18:10:00Z",
    inStock: true,
  },

  // --- More Accessories ---
  {
    _id: "p6",
    id: 6,
    name: "HyperX Gaming Headset",
    images: [tgameheadset1,tgameheadset1,tgameheadset1,tgameheadset1],
    price: 89,
    oldPrice: 119,
    rating: 4.6,
    category: "Headphones",
    path: "/products/hyperx-cloud-ii",
    description: [
      "7.1 surround sound",
      "Comfortable memory foam ear cushions",
      "Durable aluminum frame"
    ],
    createdAt: "2025-03-06T11:30:00Z",
    updatedAt: "2025-03-16T15:00:00Z",
    inStock: true,
  },
  {
    _id: "p7",
    id: 7,
    name: "Apple AirTag (4 Pack)",
    images: [ttracker1,ttracker1,ttracker1,ttracker1],
    price: 95,
    oldPrice: 119,
    rating: 4.4,
    category: "smart-devices",
    path: "/products/apple-airtag",
    description: [
      "Track belongings with precision",
      "Seamless iPhone integration",
      "Compact and easy to attach"
    ],
    createdAt: "2025-03-07T10:00:00Z",
    updatedAt: "2025-03-17T12:20:00Z",
    inStock: true,
  },
  {
    _id: "p8",
    id: 8,
    name: "Razer RGB Mouse Pad",
    images: [tmousepad1,tmousepad1,tmousepad1,tmousepad1],
    price: 49,
    oldPrice: 69,
    rating: 4.5,
    category: "Accessories",
    path: "/products/razer-firefly",
    description: [
      "Customizable RGB lighting",
      "Micro-textured surface for precision",
      "Non-slip rubber base"
    ],
    createdAt: "2025-03-08T09:10:00Z",
    updatedAt: "2025-03-18T14:30:00Z",
    inStock: true,
  },
  {
    _id: "p9",
    id: 9,
    name: "T7 Portable SSD 1TB",
    images: [tsamssd1,tsamssd1,tsamssd1,tsamssd1],
    price: 129,
    oldPrice: 159,
    rating: 4.8,
    category: "pc-components",
    path: "/products/samsung-t7",
    description: [
      "Ultra-fast read/write speeds",
      "Compact and durable design",
      "Secure encryption"
    ],
    createdAt: "2025-03-09T08:30:00Z",
    updatedAt: "2025-03-19T15:50:00Z",
    inStock: true,
  },
  {
    _id: "p10",
    id: 10,
    name: "Elgato Stream Deck Mini",
    images: [tstreamcontroller1,tstreamcontroller1,tstreamcontroller1,tstreamcontroller1],
    price: 79,
    oldPrice: 99,
    rating: 4.7,
    category: "gaming",
    path: "/products/elgato-stream-deck",
    description: [
      "6 customizable LCD keys",
      "One-touch control for streaming",
      "Compact and powerful"
    ],
    createdAt: "2025-03-10T09:50:00Z",
    updatedAt: "2025-03-19T18:30:00Z",
    inStock: true,
  },

  // --- Extra to make total 15 ---
  {
    _id: "p11",
    id: 11,
    name: "JBL  Bluetooth Speaker",
    images: [tjbl1,tjbl1,tjbl1,tjbl1],
    price: 119,
    oldPrice: 149,
    rating: 4.6,
    category: "accessories",
    path: "/products/jbl-flip6",
    description: [
      "Portable waterproof design",
      "Powerful bass and clear sound",
      "Up to 12 hours of playtime"
    ],
    createdAt: "2025-03-11T10:20:00Z",
    updatedAt: "2025-03-20T12:10:00Z",
    inStock: true,
  },
  {
    _id: "p12",
    id: 12,
    name: "Oculus VR Headset",
    images: [tvrset1,tvrset1,tvrset1,tvrset1],
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    category: "VR",
    path: "/products/oculus-quest2",
    description: [
      "Wireless all-in-one VR",
      "High-resolution display",
      "Immersive gaming experience"
    ],
    createdAt: "2025-03-12T09:00:00Z",
    updatedAt: "2025-03-21T13:40:00Z",
    inStock: true,
  },
  {
    _id: "p13",
    id: 13,
    name: "Corsair  Cooling Fan",
    images: [tcoolingfan1,tcoolingfan1,tcoolingfan1,tcoolingfan1],
    price: 39,
    oldPrice: 55,
    rating: 4.5,
    category: "pc-components",
    path: "/products/corsair-rgb-fan",
    description: [
      "Customizable RGB lighting",
      "Quiet yet powerful cooling",
      "Durable and efficient"
    ],
    createdAt: "2025-03-13T08:40:00Z",
    updatedAt: "2025-03-21T16:00:00Z",
    inStock: true,
  },
  {
    _id: "p14",
    id: 14,
    name: "SteelSeries Arctis Nova 7",
    images: [tcoolingfan1,tcoolingfan1,tcoolingfan1,tcoolingfan1],
    price: 159,
    oldPrice: 179,
    rating: 4.7,
    category: "Headphones",
    path: "/products/steelseries-nova7",
    description: [
      "Wireless multi-platform headset",
      "Immersive 360° spatial audio",
      "Long battery life"
    ],
    createdAt: "2025-03-14T11:15:00Z",
    updatedAt: "2025-03-22T15:30:00Z",
    inStock: true,
  },
  {
    _id: "p15",
    id: 15,
    name: "BaseusFast Charger65W",
    images: [tadapter1,tadapter1,tadapter1,tadapter1],
    price: 45,
    oldPrice: 59,
    rating: 4.6,
    category: "chargers-docks",
    path: "/products/baseus-gan-charger",
    description: [
      "Compact GaN technology charger",
      "Fast charging with multiple ports",
      "Travel-friendly design"
    ],
    createdAt: "2025-03-15T07:30:00Z",
    updatedAt: "2025-03-22T17:20:00Z",
    inStock: true,
  },

  // After id: 15 → add these
{
  _id: "p16",
  id: 16,
  name: "Apple Watch Series 9",
  images: [applewatchmain,applewatch2,applewatchmain,applewatchmain] ,
  price: 399,
  oldPrice: 449,
  rating: 4.8,
  category: "smartwatches",
  path: "/products/apple-watch-series-9",
  description: [
    "Always-On Retina display",
    "Advanced health sensors",
    "Fast charging and long battery life"
  ],
  createdAt: "2025-04-01T09:00:00Z",
  updatedAt: "2025-04-05T10:30:00Z",
  inStock: true,
},
{
  _id: "p17",
  id: 17,
  name: "Samsung Galaxy Watch 6",
  images: [samsungwatchmain,samsungwatchmain,samsungwatchmain,samsungwatchmain],
  price: 329,
  oldPrice: 379,
  rating: 4.6,
  category: "smartwatches",
  path: "/products/galaxy-watch-6",
  description: [
    "Slimmer design with larger display",
    "BioActive sensor for health tracking",
    "Sleep and fitness monitoring"
  ],
  createdAt: "2025-04-01T09:10:00Z",
  updatedAt: "2025-04-05T10:45:00Z",
  inStock: true,
},
// {
//   _id: "p18",
//   id: 18,
//   name: "Garmin Venu 3",
//   image: "https://static.garmincdn.com/en/products/010-02784-00/v/cf-lg-2f10b7f1-8c9e-40a6-b57c-88a95c2dcb06.jpg",
//   price: 449,
//   oldPrice: 499,
//   rating: 4.7,
//   category: "smartwatches",
//   path: "/products/garmin-venu-3",
//   description: [
//     "AMOLED touchscreen display",
//     "Built-in GPS and 30+ sports apps",
//     "Body Battery energy monitoring"
//   ],
//   createdAt: "2025-04-01T09:20:00Z",
//   updatedAt: "2025-04-05T11:00:00Z",
//   inStock: true,
// },
// {
//   _id: "p19",
//   id: 19,
//   name: "Fitbit Sense 2",
//   image: "https://static.fitbit.com/simple.b-cssdisabled-png.h22c5f57d17df7c56687615e3ec7ec52c.pack?items=%2Fcontent%2Fdam%2Ffitbit%2Fglobal%2Fmarketing-assets%2Fdevices%2Fsense-2%2Fstatic%2Fsense2-family.png",
//   price: 249,
//   oldPrice: 299,
//   rating: 4.4,
//   category: "smartwatches",
//   path: "/products/fitbit-sense-2",
//   description: [
//     "Stress management tools",
//     "Health metrics dashboard",
//     "6+ days battery life"
//   ],
//   createdAt: "2025-04-01T09:30:00Z",
//   updatedAt: "2025-04-05T11:15:00Z",
//   inStock: true,
// },
// {
//   _id: "p20",
//   id: 20,
//   name: "Amazfit GTR 4",
//   image: "https://static.amazfit.com/en/media/GTR4/gtr-4-en-1.png",
//   price: 199,
//   oldPrice: 229,
//   rating: 4.5,
//   category: "smartwatches",
//   path: "/products/amazfit-gtr-4",
//   description: [
//     "Ultra HD AMOLED display",
//     "150+ sports modes",
//     "Dual-band GPS and Alexa built-in"
//   ],
//   createdAt: "2025-04-01T09:40:00Z",
//   updatedAt: "2025-04-05T11:30:00Z",
//   inStock: true,
// },

];



export const dummyAddresses = [
  {
    id: 1,
    name: "Arun Kumar",
    street: "12, Anna Salai, Mount Road",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600002",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Priya Ramesh",
    street: "45, Gandhi Road, Near Bus Stand",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    pincode: "641018",
    phone: "+91 9786541230",
  },
  {
    id: 3,
    name: "Suresh Babu",
    street: "8/22, Venkatesa Perumal Kovil Street",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "625001",
    phone: "+91 9563248710",
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",
    street: "99, Maruthamalai Main Road",
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
    pincode: "636007",
    phone: "+91 9123456789",
  },
  {
    id: 5,
    name: "Meena Rajan",
    street: "27, Beach Road",
    city: "Thoothukudi",
    state: "Tamil Nadu",
    country: "India",
    pincode: "628001",
    phone: "+91 9345678123",
  },
]



// dummyOrders.js

// src/data/dummyOrders.js

export const dummyOrders = [
  {
    orderId: "ORD-1001",
    paymentMethod: "Online",
    totalAmount: 5299,
    status: "Order Placed",
    date: "2025-03-10T10:30:00Z",
    items: [
      {
        name: "PS5 DualSense Controller",
        category: "Gaming",
        quantity: 1,
        price: 5299,
        image:
          tps51, // 
      },
    ],
  },
  {
    orderId: "ORD-1002",
    paymentMethod: "COD",
    totalAmount: 15999,
    status: "Shipped",
    date: "2025-03-12T15:45:00Z",
    items: [
      {
        name: "NVIDIA RTX 4060 Ti",
        category: "PC Components",
        quantity: 1,
        price: 15999,
        image:
          tcoolingfan1,
      },
    ],
  },
  {
    orderId: "ORD-1003",
    paymentMethod: "Online",
    totalAmount: 7999,
    status: "Delivered",
    date: "2025-03-15T08:20:00Z",
    items: [
      {
        name: "Apple Watch Series 9",
        category: "Smartwatches",
        quantity: 1,
        price: 7999,
        image:
          applewatch2,
      },
    ],
  },
  {
    orderId: "ORD-1004",
    paymentMethod: "COD",
    totalAmount: 2499,
    status: "Order Placed",
    date: "2025-03-18T12:05:00Z",
    items: [
      {
        name: "Logitech G435 Wireless Headset",
        category: "Accessories",
        quantity: 1,
        price: 2499,
        image:
          theadset1,
      },
      {
        name: "Wired Simple Headset",
        category: "Accessories",
        quantity: 2,
        price: 799,
        image:
          theadset1,
      },
    ],
  },
  {
    orderId: "ORD-1005",
    paymentMethod: "Online",
    totalAmount: 1299,
    status: "Delivered",
    date: "2025-03-20T09:50:00Z",
    items: [
      {
        name: "Anker Fast Charger 30W",
        category: "Chargers & Docks",
        quantity: 1,
        price: 1299,
        image:
          cwirelesscharger,
      },
    ],
  },
];





 


export const upload_area ="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"



export const dummySellOrders = [
        { id: 1, items: [{ product: { name: "PS5 DualSense Controller" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 2, items: [{ product: { name: "Headset" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
        { id: 3, items: [{ product: { name: "Wireless Charger" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    ];