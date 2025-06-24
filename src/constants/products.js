import blackoutcurtain from '../assets/blackoutcurtain.png'; // Ensure this path is correct
import motorizedcurtain from '../assets/motorizedcurtain.png'; // Ensure this path is correct
import rollerblind from '../assets/rollerblind.png'; // Ensure this path is correct
import romaniblind from '../assets/romaniblind.png'; // Ensure this path is correct
import sheercurtain from '../assets/sheercurtain.png'; // Ensure this path is correct
import zebrablind from '../assets/zebrablind.png'; // Ensure this path is correct
export const products = [
  {
    id: 1,
    name: "Blackout Curtain",
    image: blackoutcurtain,
    type: "curtain",
    description: "Complete light blocking for perfect sleep"
  },
  {
    id: 2,
    name: "Sheer Curtain",
    image: sheercurtain,
    type: "curtain",
    description: "Elegant light filtering with privacy"
  },
  {
    id: 3,
    name: "Motorized Curtain",
    image: motorizedcurtain,
    type: "curtain",
    description: "Classic folding style with luxury appeal"
  },
  {
    id: 4,
    name: "Roller Blind",
    image: rollerblind,
    type: "blind",
    description: "Modern minimalist window solution"
  },
  {
    id: 5,
    name: "Zebra Blind",
    image: zebrablind,
    type: "blind",
    description: "Dual fabric for ultimate light control"
  },
  {
    id: 6,
    name: "Romani Blind",
    image: romaniblind,
    type: "blind",
    description: "Dual fabric for ultimate light control"
  },
];
export const filterOptions = [
  { name: "All", label: "All", value: "all" },
  { name: "Curtain", label: "Curtains", value: "curtain" },
  { name: "Blind", label: "Blinds", value: "blind" }
];
