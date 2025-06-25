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
    description: "Complete light blocking for perfect sleep",
    benefits: [
      { title: "Blocks 100% Light", description: "Perfect for bedrooms and media rooms with total darkness." },
      { title: "Thermal Insulation", description: "Helps regulate room temperature and save on AC bills." },
      { title: "Noise Reduction", description: "Blocks outside noise for peaceful living." },
      { title: "Modern Finish", description: "Elegant designs that elevate any room aesthetic." },
    ]
  },
  {
    id: 2,
    name: "Sheer Curtain",
    image: sheercurtain,
    type: "curtain",
    description: "Elegant light filtering with privacy",
    benefits: [
      { title: "Natural Light Control", description: "Softens sunlight while maintaining privacy." },
      { title: "Airy Look", description: "Perfect for bright, breathable interiors." },
      { title: "Layer Friendly", description: "Pairs well with blackout or roman blinds." },
      { title: "Affordable Luxury", description: "Elegant styling at an affordable price." },
    ]
  },
  {
    id: 3,
    name: "Motorized Curtain",
    image: motorizedcurtain,
    type: "curtain",
    description: "Classic folding style with luxury appeal",
    benefits: [
      { title: "Smart Remote Control", description: "Operate curtains via remote, app or voice assistant." },
      { title: "Smooth Glide System", description: "Quiet and seamless operation with motor tech." },
      { title: "Elegant Design", description: "Adds a luxurious, hotel-style touch to interiors." },
      { title: "Energy Efficient", description: "Automated scheduling helps control indoor climate." },
    ]
  },
  {
    id: 4,
    name: "Roller Blind",
    image: rollerblind,
    type: "blind",
    description: "Modern minimalist window solution",
    benefits: [
      { title: "Clean, Sleek Look", description: "Perfect for modern minimalist spaces." },
      { title: "Space Saving", description: "Rolls up neatly without bulk." },
      { title: "Easy to Maintain", description: "Dust-resistant and easy to wipe clean." },
      { title: "UV Protection", description: "Blocks harmful rays without blocking light fully." },
    ]
  },
  {
    id: 5,
    name: "Zebra Blind",
    image: zebrablind,
    type: "blind",
    description: "Dual fabric for ultimate light control",
    benefits: [
      { title: "Adjustable Light Filter", description: "Switch between sheer and opaque with ease." },
      { title: "Stylish Patterns", description: "Modern stripe designs for contemporary homes." },
      { title: "Privacy & Light Combo", description: "Get both visibility and privacy on demand." },
      { title: "Smooth Roller", description: "Easy chain or motor-driven motion." },
    ]
  },
  {
    id: 6,
    name: "Romani Blind",
    image: romaniblind,
    type: "blind",
    description: "Dual fabric for ultimate light control",
    benefits: [
      { title: "Classic Folding Style", description: "Neatly folds into elegant pleats." },
      { title: "Custom Fabric Choices", description: "Match your decor with wide fabric options." },
      { title: "Soft Room Ambiance", description: "Adds texture and warmth to interiors." },
      { title: "Easy Operation", description: "Smooth pull system or motorized options." },
    ]
  },
];

export const filterOptions = [
  { name: "All", label: "All", value: "all" },
  { name: "Curtain", label: "Curtains", value: "curtain" },
  { name: "Blind", label: "Blinds", value: "blind" }
];
