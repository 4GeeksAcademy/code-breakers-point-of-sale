import { Typography, IconButton, Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import RegionCard from "../component/RegionCard";
import DeleteIcon from '@mui/icons-material/Delete';

export const Regions = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = (name, price, region) => {
    navigate(`/regions/${region.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleRemove = (name, price) => {
    actions.removeCoffeeFromOrder({ name, price });
  };

  return (
    <div style={{ display: "flex", paddingTop: '64px', paddingLeft: '16px', paddingRight: '16px' }}>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px", paddingRight: '16px', display: 'flex', flexDirection: 'column', paddingLeft: '16px' }}>
        <Typography variant="h1">Orders</Typography>
        <ul style={{ padding: 0, listStyle: 'none', flex: 1, marginTop: '16px' }}>
          {store.order.items.map((coffee, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <IconButton onClick={() => handleRemove(coffee.name, coffee.price)} style={{ marginRight: '16px' }}>
                <DeleteIcon />
              </IconButton>
              <Typography variant="h6" component="span">
                {coffee.name} - ${coffee.price}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography variant="h3" style={{ marginTop: 'auto' }}>Total: ${store.order.total.toFixed(2)}</Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/payment')}
          style={{ backgroundColor: "#2DB734", color: "white", height: "50px", marginTop: "20px" }}
        >
          Checkout
        </Button>
      </div>

      <div style={{ flex: 1, paddingLeft: '16px' }}>
        <Typography variant="h1">Regions</Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
          {Object.keys(store)
            .filter((region) => region !== 'order' && region !== 'user')
            .map((region) => (
              <div key={region} style={{ flex: "1 0 calc(33% - 16px)" }} onClick={() => handleClick('', 0, region)}>
                <RegionCard image={getImageForRegion(region)} region={region}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const getImageForRegion = (region) => {
  switch (region) {
    case 'Central America':
      return 'https://www.familysearch.org/en/wiki/img_auth.php/thumb/0/07/Central_America.png/900px-Central_America.png';
    case 'Africa':
      return 'https://www.nourhan.com/wp-content/uploads/2018/11/africa-map-with-capitals-large-political-map-of-africa-with-capitals-1999-africa-map-with-capitals-1.jpeg';
    // Add cases for other regions...
    case 'South America':
      return 'https://d1sz1zrtudycb.cloudfront.net/wp-content/uploads/2019/11/633986_south-america.jpg';
    case 'Asia Pacific':
      return 'https://www.english-blogs.com/wp-content/uploads/2014/05/Asia-Pacific.gif';
    case 'Middle East':
      return 'https://www.gifex.com/images/0X0/2009-11-17-11127/Middle-East-Political-Map.jpg';
    default:
      return ''; // Default empty image URL
  }
};
