import nike from "../assets/images/nike-logo.png";
import adidas from "../assets/images/adidas-logo.png";
import reebok from "../assets/images/reebok-logo.png";
import puma from "../assets/images/puma-logo.jpg";
import nb from "../assets/images/new-balance-logo.png";
import converse from "../assets/images/converse-logo.png";

import product1 from "../assets/images/trending5.jpg";
import product2 from "../assets/images/trending2.jpg";
import product3 from "../assets/images/trending3.jpg";
import product4 from "../assets/images/trending4.jpg";

import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import visa from "../assets/icons/visa-card.png";
import mastercard from "../assets/icons/mastercard.png";
import paypal from "../assets/icons/paypal-card.png";
import applepay from "../assets/icons/apple-pay.png";
import gpay from "../assets/icons/google-pay.png";

export const BASE_URL = "http://localhost:8000/api";
export const SHOE_SIZES = ["6", "7", "8", "9", "10", "11", "12"];
export const PRODUCT_IMAGE = ["img1", "img2", "img3", "img4"];
export const BRAND_LOGOS = [
  { src: nike, alt: "nike" },
  { src: adidas, alt: "adidas" },
  { src: reebok, alt: "reebok" },
  { src: puma, alt: "puma" },
  { src: nb, alt: "new balance" },
  { src: converse, alt: "converse" },
];

export const TRENDING_PRODUCT = [
  { src: product1, alt: "product1" },
  { src: product2, alt: "product2" },
  { src: product3, alt: "product3" },
  { src: product4, alt: "product4" },
];

export const SOCIAL_MEDIA_ICONS = [
  { src: facebook, alt: "facebook" },
  { src: instagram, alt: "instagram" },
  { src: twitter, alt: "twitter" },
  { src: youtube, alt: "youtube" },
];

export const PAYMENT_ICONS = [
  { src: visa, alt: "visa" },
  { src: mastercard, alt: "mastercard" },
  { src: paypal, alt: "paypal" },
  { src: applepay, alt: "applepay" },
  { src: gpay, alt: "gpay" },
];
