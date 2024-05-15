import React, { useContext } from "react";
import { Context } from "../store/appContext";
import RegionCard from "../component/RegionCard";
import { Grid, Typography, } from "@mui/material"; // Import Material-UI components
import "../../styles/home.css";
import  {Navbar}  from "../component/navbar";
import {blueGrey} from '@mui/material/colors';
let coffee = {
    'Central America': [
      {
        _id: '6424335b59f9f6fdd657d2e1',
        id: 1,
        name: 'Signature Blend',
        description: 'A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.',
        price: 12.99,
        region: 'Central America',
        weight: 500,
        flavor_profile: [ 'Dark Chocolate', 'Black Cherry' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 3,
        image_url: 'https://iili.io/H8Y78Qt.webp'
      },
      {
        _id: '6424338c59f9f6fdd657d2e4',
        id: 4,
        name: 'Harvest Moon',
        description: 'A smooth and earthy blend with notes of cocoa and hazelnut.',
        price: 9.99,
        region: 'Central America',
        weight: 500,
        flavor_profile: [ 'Cocoa', 'Hazelnut' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 3,
        image_url: 'https://iili.io/H8Y7X4a.webp'
      },
      {
        _id: '6424353259f9f6fdd657d2e8',
        id: 7,
        name: 'Breezy Beans',
        description: 'This coffee blend is made from beans sourced from Honduras and Costa Rica. It is a light roast coffee with a bright and citrusy flavor profile. It is perfect for pour-over and drip coffee brewing methods.',
        price: 11.99,
        region: 'Central America',
        weight: 500,
        flavor_profile: [ 'Citrusy' ],
        grind_option: [ 'Whole bean', 'Filter' ],
        roast_level: 1,
        image_url: 'https://iili.io/H8Y7lpV.webp'
      },
      {
        _id: '6424354d59f9f6fdd657d2f5',
        id: 19,
        name: 'Central Perk',
        description: 'A medium roast coffee with a smooth, nutty flavor and a hint of caramel. Inspired by your favorite coffee shop!',
        region: 'Central America',
        weight: 500,
        roast_level: 3,
        flavor_profile: [ 'Nutty', 'Caramel' ],
        grind_option: [
          'Whole bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        image_url: 'https://iili.io/H8Y7aYx.webp',
        price: 9.99
      }
    ],
    "Africa": [
      {
        _id: '6424338559f9f6fdd657d2e2',
        id: 2,
        name: 'Golden Sunrise',
        description: 'A smooth and bright coffee with a citrusy kick. Sourced from the rolling hills of Africa.',
        price: 10.99,
        region: 'Africa',
        weight: 500,
        flavor_profile: [ 'Citrus' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 2,
        image_url: 'https://iili.io/H8Y7WEg.webp'
      },
      {
        _id: '6424352d59f9f6fdd657d2e6',
        id: 5,
        name: 'Wildfire',
        description: 'A bold and smoky blend with notes of dark chocolate and molasses.',
        price: 12.99,
        region: 'Africa',
        weight: 500,
        flavor_profile: [ 'Dark Chocolate', 'Molasses' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 5,
        image_url: 'https://iili.io/H8Y7r4s.webp'
      },
      {
        _id: '6424353759f9f6fdd657d2ea',
        id: 9,
        name: 'Ethiopian Yirgacheffe',
        description: 'A light and fruity coffee with notes of blueberry and citrus. Grown in the highlands of Ethiopia, this coffee is sure to brighten up your morning.',
        price: 12.99,
        region: 'Africa',
        weight: 500,
        roast_level: 2,
        flavor_profile: [ 'Blueberry', 'Citrus' ],
        grind_option: [
          'Whole bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        image_url: 'https://iili.io/H8Y7VCF.webp'
      },
      {
        _id: '6424353d59f9f6fdd657d2ed',
        id: 12,
        name: 'Savanna Noir',
        description: 'A bold and rich coffee from the African savanna, with notes of dark chocolate and blackcurrant.',
        price: 12.99,
        region: 'Africa',
        weight: 500,
        roast_level: 4,
        flavor_profile: [ 'Dark Chocolate', 'Blackcurrant' ],
        grind_option: [ 'Whole Bean', 'Filter', 'Espresso' ],
        image_url: 'https://iili.io/H8Y7vjI.webp'
      }
    ],
    'South America': [
      {
        _id: '6424338959f9f6fdd657d2e3',
        id: 3,
        name: 'Rainforest Rhapsody',
        description: 'An earthy and complex coffee with notes of toasted nuts and caramel. Sustainably grown in the rainforests of South America.',
        price: 14.99,
        region: 'South America',
        weight: 500,
        flavor_profile: [ 'Citrus' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 2,
        image_url: 'https://iili.io/H8Y7kTN.webp'
      },
      {
        _id: '6424353059f9f6fdd657d2e7',
        id: 6,
        name: 'Walnut Wonder',
        description: 'A smooth and nutty coffee from the slopes of South America.',
        price: 9.99,
        region: 'South America',
        weight: 500,
        flavor_profile: [ 'Nutty', 'Smooth' ],
        grind_option: [
          'Whole bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 3,
        image_url: 'https://iili.io/H8Y7gGn.webp'
      },
      {
        _id: '6424353959f9f6fdd657d2eb',
        id: 10,
        name: 'Lazy Days',
        description: 'A medium-bodied coffee with a sweet and nutty flavor. Grown in the lush regions of Brazil, this coffee is perfect for a lazy afternoon.',
        price: 9.99,
        region: 'South America',
        weight: 500,
        roast_level: 3,
        flavor_profile: [ 'Hazelnut', 'Chocolate', 'Caramel' ],
        grind_option: [
          'Whole bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        image_url: 'https://iili.io/H8Y7NvR.webp'
      },
      {
        _id: '6424353b59f9f6fdd657d2ec',
        id: 11,
        name: 'Andean Almond',
        description: 'A smooth and mellow coffee from the mountains of South America, with hints of almond and toffee.',
        price: 10.99,
        region: 'South America',
        weight: 500,
        roast_level: 3,
        flavor_profile: [ 'Almond', 'Toffee' ],
        grind_option: [ 'Whole Bean', 'Cafetiere', 'Filter' ],
        image_url: 'https://iili.io/H8Y5Sgj.webp'
      },
      {
        _id: '6424354359f9f6fdd657d2f0',
        id: 15,
        name: 'Midnight Mocha',
        description: 'Indulge in the rich, velvety flavors of this decadent mocha blend. Dark chocolate and espresso notes are combined with a touch of vanilla for a luxurious coffee experience.',
        price: 14.99,
        region: 'South America',
        weight: 500,
        flavor_profile: [ 'Dark Chocolate', 'Espresso', 'Vanilla' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 4,
        image_url: 'https://iili.io/H8Y7Opp.webp'
      },
      {
        _id: '642d3d8719341833719cd68c',
        id: 20,
        name: 'Chilean Charm',
        description: 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.',
        price: 12.99,
        region: 'South America',
        weight: 500,
        flavor_profile: [ 'Chocolate', 'Caramel', 'Fruit' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 2,
        image_url: 'https://iili.io/H8Y7EhP.webp'
      }
    ],
    'Asia Pacific': [
      {
        _id: '6424353559f9f6fdd657d2e9',
        id: 8,
        name: 'Indo-Viet Roast',
        description: 'This coffee blend is made from beans sourced from Indonesia and Vietnam. It is a medium-dark roast coffee with a spicy and earthy flavor profile, with notes of cinnamon and clove. It is perfect for drip and French press brewing methods.',
        price: 13.99,
        region: 'Asia Pacific',
        weight: 500,
        flavor_profile: [ 'Spicy', 'Earthy', 'Cinnamon', 'Clove' ],
        grind_option: [ 'Whole bean', 'Filter', 'French press' ],
        roast_level: 4,
        image_url: 'https://iili.io/H8Y7wYv.webp'
      },
      {
        _id: '6424353f59f9f6fdd657d2ee',
        id: 13,
        name: 'Coconut Kiss',
        description: 'A light and refreshing coffee from the shores of the Asia Pacific, with a subtle coconut flavor.',
        price: 9.99,
        region: 'Asia Pacific',
        weight: 500,
        roast_level: 2,
        flavor_profile: [ 'Coconut' ],
        grind_option: [ 'Whole Bean', 'Filter' ],
        image_url: 'https://iili.io/H8Y7GQ1.webp'
      },
      {
        _id: '6424354559f9f6fdd657d2f1',
        id: 16,
        name: 'Himalayan Heights',
        description: 'Grown on the steep slopes of the Himalayan Mountains, this coffee is known for its bright acidity and delicate floral notes. This light roast is perfect for those who prefer a more delicate flavor profile.',
        price: 12.99,
        region: 'Asia Pacific',
        weight: 500,
        flavor_profile: [ 'Floral', 'Citrus', 'Honey' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Pour Over'
        ],
        roast_level: 1,
        image_url: 'https://iili.io/H8Y7j3J.webp'
      },
      {
        _id: '6424354759f9f6fdd657d2f2',
        id: 17,
        name: 'Sumatra Blend',
        description: 'Get your day started with the bold and earthy flavors of Sumatra. Grown on the lush tropical slopes of the Gayo Highlands, this coffee is known for its full body, low acidity, and notes of dark chocolate and smoke.',
        price: 8.99,
        region: 'Asia Pacific',
        weight: 500,
        flavor_profile: [ 'Dark Chocolate', 'Smoke' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 5,
        image_url: 'https://iili.io/H8Y7UCX.webp'
      },
      {
        _id: '6424354959f9f6fdd657d2f3',
        id: 18,
        name: 'Bali Bliss',
        description: 'Escape to the tropical paradise of Bali with this smooth and mellow blend. Grown on small family farms, this coffee is shade-grown and hand-picked for a rich and nuanced flavor profile. Notes of milk chocolate, hazelnut, and a hint of tropical fruit.',
        price: 11.99,
        region: 'Asia Pacific',
        weight: 500,
        flavor_profile: [
          'Milk Chocolate',
          'Hazelnut',
          'Tropical Fruit'
        ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        roast_level: 3,
        image_url: 'https://iili.io/H8Y71TB.webp'
      }
    ],
    'Middle East': [
      {
        _id: '6424354159f9f6fdd657d2ef',
        id: 14,
        name: 'Arabian Nights',
        description: 'A bold and spicy coffee from the Middle East, with notes of cardamom and cinnamon.',
        price: 13.99,
        region: 'Middle East',
        weight: 500,
        roast_level: 4,
        flavor_profile: [ 'Cardamom', 'Cinnamon' ],
        grind_option: [
          'Whole Bean',
          'Cafetiere',
          'Filter',
          'Espresso'
        ],
        image_url: 'https://iili.io/H8Y7ckQ.webp'
      }
    ]
  }
















export const Home = () => {
	const { store, actions } = useContext(Context);
  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="mt-5">
            <Typography variant="h1">Orders:<div style={{ width: '100px', height: '100px', background: '#cfd8dc' }} />
            </Typography>
            
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="mt-5">
            <Typography variant="h1">Regions:</Typography>
            {/* Assuming RegionCard is defined elsewhere */}
            <RegionCard />
          </div>
        </Grid>
      </Grid>
    </>
  );
};