import dosa from './dosa.jpg';
import pizza from './pizza.jpg';
import Sandwich from './Sandwich.jpg';
import logo from './logo.png';
import search from './search.png';
import cart from './cart.png';
import logo2 from './logo2.png';
import cake from './cake.jpg';
import panner_sabzi from './panner_sabzi.jpg';
import dal_bati from './dal_bati.jpg';
import gulab_jamun from './gulab_jamun.jpg';
import rating_stars from './rating_stars.png';
import pancake from './pancake.jpg';
import rass_malai from './rass_malai.jpeg';
import salad from './salad.jpg';
import lachha_paratha from './lachha_paratha.jpg';
import litti_chhoka from './litti_chhoka.jpg';
import facebook_icon from './facebook_icon.webp';
import Twitter_icon from './Twitter_icon.png';
import linkedin from './linkedin.png';
import get_it_on_AS from './get_it_on_AS.png';
import get_it_on_PS from './get_it_on_PS.png';
import cross_iconn from './cross_iconn.png';
import man from './man.png';
export const assets = {
  dosa,
  pizza,
  Sandwich,
  logo,
  search,
  cart,
  logo2,
  rating_stars,
  cake,
  panner_sabzi,
  dal_bati,
  gulab_jamun,
  pancake,
  rass_malai,
  salad,
  lachha_paratha,
  litti_chhoka,
  facebook_icon,
  Twitter_icon,
  linkedin,
  get_it_on_AS,
  get_it_on_PS,
  cross_iconn,
  man,
};
export const menu_list = [
  {
    menu_name: "Dosa",
    menu_image: dosa,
  },
  {
    menu_name: "Pizza",
    menu_image: pizza,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Cake",
    menu_image: cake,
  },
  {
    menu_name: "Panner Sabzi",
    menu_image: panner_sabzi,
  },
  {
    menu_name: "Dal Bati",
    menu_image: dal_bati,
  },
  {
    menu_name: "Desert",
    menu_image: gulab_jamun,
  },
]
export const food_list=[
    {
    _id: "1",
    name:"Litti Chokha",
    price:140,
    description:'A traditional dish from Bihar,India',
    category:"Litti Chokha",
    image:litti_chhoka,
  },
    {
    _id: "5",
    name:"Pancake",
    price:70,
    description:'A flat, round cake made from a batter of flour, eggs, milk, and butter.',
    category:"Desert",
    image:pancake,
  },
  {
    _id: "4",   
    name:"Rass Malai",
    price:120,
    description:'A popular Indian dessert consisting of soft, spongy cheese dumplings soaked in sweetened.',
    category:"Desert",
    image:rass_malai, 
  },
  {
    _id: "3",
    name:"Salad",
    price:80,
    description:'A fresh and healthy dish made by combining a variety of raw or cooked vegetables.',
    category:"Salad",
    image:salad,
  },
  {
    _id: "2",
    name:"Lachha Paratha",
    price:60,
    description:'A flaky and layered Indian flatbread made from whole wheat flour.',
    category:"Lachha Paratha",
    image:lachha_paratha,
  },
  {
   _id: "12",
   name:"Dosa",
   price:50,
   image:dosa,
   description:'Crispy and savory South Indian pancake made from fermented rice .',
   category:"Dosa",
  },
  {
    _id: "11",
    name:"Pizza",
    price:200,
    image:pizza,
    description:'A popular Italian dish .',
    category:"Pizza",
  },
  {
    _id: "10",
    name:"Sandwich",
    price:100,
    image:Sandwich,
    description:'A versatile and convenient meal made by placing various fillings.',
    category:"Sandwich",
  },
  {
    _id: "9",
    name:"Cake",
    image:cake,
    price:150,
    description:'A sweet baked dessert typically made from flour, sugar, eggs, and butter.',
    category:"Cake",

  },
  {
    _id: "8",
    name:"Panner Sabzi",
    price:180,
    image:panner_sabzi,
    description:'A flavorful Indian dish made with paneer (Indian cottage cheese) cooked in a rich and aromatic gravy .',
    category:"Panner Sabzi",
  },
  {
    _id: "7",
    name:"Dal Bati",
    price:160,
    description:'A traditional Rajasthani dish consisting of lentil curry (dal) served with baked wheat flour balls (bati).',
    category:"Dal Bati",
    image:dal_bati,
  },
  {
    _id: "6",
    name:"Desert",
    price:90,
    description:'A popular Indian dessert made of deep-fried dough balls.',
    category:"Desert",
    image:gulab_jamun,
  },



]
export default assets;