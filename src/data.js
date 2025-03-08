import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 4, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Maximize your adventure, minimize your overhead! Smart savings empower our hiking tour company to invest in top-tier guides, pristine equipment, and unforgettable experiences. Your journey into the wilderness shouldn't break the bank; we believe in accessible adventures for everyone.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Escape the ordinary and immerse yourself in nature's grandeur with endless hiking. Discover breathtaking vistas, invigorating trails, and the profound peace found only in the wilderness. Reconnect with yourself and the planet, one step at a time.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Experience the trails in unparalleled comfort with our premium gear and expertly chosen routes. We prioritize your well-being, ensuring every step is supported and every rest is restorative. Discover the joy of hiking without the discomfort, and focus solely on the breathtaking beauty around you.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2025",
    title: "Best of Java",
    info: "Discover the magic of Tibet's ancient trails with our expert hiking guide. Immerse yourself in breathtaking landscapes, encounter unique cultures, and embark on a transformative journey through the Himalayas.",
    location: "Indonesia",
    duration: 6,
    cost: 1400,
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2025",
    title: "Tibet Adventure",
    info: "Discover the enchanting landscapes of Indonesia as you trek through lush rainforests, scale volcanic peaks, and immerse yourself in the rich culture of Java.",
    location: "China",
    duration: 11,
    cost: 2100,
  },
  {
    id: 3,
    image: tour3,
    date: "September 26th, 2025",
    title: "Explore Hong Kong",
    info: "Explore lush trails, breathtaking cityscapes, and hidden temples with our expert guides. Embark on an unforgettable adventure and discover the hidden gems of Hong Kong.",
    location: "Hong Kong",
    duration: 8,
    cost: 3300,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2025",
    title: "Kenya Highlights",
    info: "From the snow-capped peaks of Mount Kenya to the vast plains of the Masai Mara, experience the thrill of encountering wildlife in their natural habitat, immerse yourself in the rich culture of the Maasai people, and create memories that will last a lifetime.",
    location: "Kenya",
    duration: 20,
    cost: 5000,
  },
  {
    id: 5,
    image: tour5,
    date: "May 15th, 2025",
    title: "Eswatini Safari",
    info: "Unforgettable adventures in the Kingdom of Eswatini, where you'll trek through breathtaking landscapes, encounter wildlife in their natural habitat, and immerse yourself in the rich Swazi culture.",
    location: "Eswatini",
    duration: 10,
    cost: 1700,
  },
  {
    id: 6,
    image: tour6,
    date: "March 24th, 2025",
    title: "Taj Mahal Sunrise",
    info: "Discover the magic of India's most iconic landmark, exploring the hidden trails and breathtaking views of the Taj Mahal and its surrounding gardens.",
    location: "India",
    duration: 12,
    cost: 1900,
  },
];
