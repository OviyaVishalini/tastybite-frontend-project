import { sideBarType } from "../types";
import Hotel1 from "../assets/images/sshydbriyani.jpg";
import Hotel2 from "../assets/images/palmshore.png";
import Hotel3 from "../assets/images/zaitoon.jpeg";
import Hotel4 from "../assets/images/dominos.png";
import Hotel5 from "../assets/images/pizzahut.jpg";
import Hotel6 from "../assets/images/chinesewok.jpg";
import Hotel7 from "../assets/images/kfc.png";
import Hotel8 from "../assets/images/wowmomo.jpg";
import Hotel9 from "../assets/images/gogoramen.avif"; 

export const sideBarNavItems: sideBarType[] = [
    {
        path: "/dashboard",
        access: ["HOTEL_MANAGEMENT", "CUSTOMER"],
        title: "Dashboard",
        icon: "",
    },
    {
        path: "/cart",
        access: [ "CUSTOMER"],
        title: "Cart",
        icon: "",
    },
    {
        path: "/create-order",
        access: ["HOTEL_MANAGEMENT"],
        title: "Create Order",
        icon: "",
    },
    {
        path: "/total-order",
        access: ["HOTEL_MANAGEMENT"],
        title: "Total Order",
        icon: "",
    },
    ];

    export const users = [
        {
            id: 1,
            name: "Hotel Manager",
            role: "HOTEL_MANAGEMENT",
            email: "hotel@gmail.com",
            pass: "123",
            mob: "8608265825",
        },
        {
            id: 2,
            name: "Customer",
            role: "CUSTOMER",
            email: "cus@gmail.com",
            mob: "9987893673",
            pass: "321",
        },
        {  
             id: 3,
            name: "Oviya Vishalini",
            role: "CUSTOMER",
            email: "oviya@gmail.com",
            mob: "8610881585",
            pass: "3110",

        },
        {
            id:4,
            name:"Khathija Shahim",
            role:"CUSTOMER",
            email:"khathija@gmail.com",
            mob:9710389745,
            pass:"2302"
        }
    ];

    export const hotelList = [
        {
            id: 1,
            name: "SS Hyderabad Briyani",
            des: "Authentic Hyderabad-style biryani known for rich spices and aroma.",
            menuItem: [],
            image: Hotel1,
        },
        {
            id: 2,
            name: "Palmshore",
            des: "Best known for Arabian grills, shawarma rolls, and fresh seafood cuisine.",
            menuItem: [],
           image: Hotel2,
        },
        {
            id: 3,
            name: "Zaitoon",
            des: "Multi-cuisine family restaurant serving BBQ, Chinese, and North Indian dishes.",
            menuItem: [],
            image: Hotel3,
        },
        {
            id: 4,
            name: "Dominos",
            des: "Popular pizza franchise delivering hot, cheesy and oven-fresh pizzas quickly.",
            menuItem: [],
            image: Hotel4,
        },
        {
            id: 5,
            name: "Pizzahut",
            des: "Known for pan pizzas, cheesy crusts and delicious pasta sides.",
            menuItem: [],
            image: Hotel5,
        },
        {
            id: 6,
            name: "ChineseWok",
            des: "Freshly tossed noodles and fried rice with rich Chinese flavors.",
            menuItem: [],
            image: Hotel6,
        },
        {
            id: 7,
            name: "KFC",
            des: "Crispy, juicy fried chicken packed with bold flavor.",
            menuItem: [],
            image: Hotel7,
        },
        {
            id: 8,
            name: "WoW!MoMo!",
            des: "Soft and flavorful momos served fresh with tasty dips.",
            menuItem: [],
            image: Hotel8,
        },
        {
            id: 9,
            name: "GoGo Ramen",
            des: "Famous for ramen bowls, Korean fried chicken, and kimchi rice.Modern and casual vibe.",
            menuItem: [],
            image: Hotel9,
        },
        
    ];


