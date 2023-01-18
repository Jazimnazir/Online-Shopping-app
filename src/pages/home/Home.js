import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import myntra from '../../assets/images/myntra.jpg';
import roadster from '../../assets/images/roadster.png';
import rd from '../../assets/images/rd.png';
import rds from '../../assets/images/rds.webp';
import download from '../../assets/images/download.jpeg';
import Banner from '../../assets/images/Banner.jpg';
import clothes from '../../assets/images/clothes.jpg';
import copy from '../../assets/images/Copy.jpeg';
import cl from '../../assets/images/cl.png';
import images from '../../assets/images/images.jpeg';
import img7 from '../../assets/images/img7.jpeg';
import img8 from '../../assets/images/img8.jpeg';
import img4 from '../../assets/images/img4.jpeg';
import img6 from '../../assets/images/img6.jpeg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpeg';
import img11 from '../../assets/images/img11.jpeg';
import img12 from '../../assets/images/img12.jpeg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';

import img16 from '../../assets/images/img16.webp';
import img17 from '../../assets/images/img17.webp';
import img18 from '../../assets/images/img18.jpg';
import img19 from '../../assets/images/img19.webp';
import img20 from '../../assets/images/img20.jpeg';
import img21 from '../../assets/images/img21.jpeg';
import img23 from '../../assets/images/img23.jpg';
import img24 from '../../assets/images/img24.jpg';
import img25 from '../../assets/images/img25.jpeg';
import img26 from '../../assets/images/img26.png';
import img27 from '../../assets/images/img27.jpg';
import img28 from '../../assets/images/img28.jpg';
import img29 from '../../assets/images/img29.webp';
import img30 from '../../assets/images/img30.webp';
import img31 from '../../assets/images/img31.jpg';

const Home = () => {
  return (
    <>
      <Grid>
        <Grid
          sx={{
            display: 'flex',
            position: 'fixed',
            justifyContent: 'center',
            backgroundColor: '#2874f0',
            color: 'white',
            pt: '0px',
            p: '31px',
            width: '100%',
          }}
        >
          <Typography variant='h5' sx={{ color: 'black' }}>
            Online Shopping
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '111px' }}>
            Men
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            Women
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            Kids
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            Home&Living
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '51px' }}>
            Beauty
          </Typography>
          <Typography variant='subtitle1' sx={{ pl: '11px' }}>
            Studio
          </Typography>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
              mt: '-11px',
              ml: '21px',
            }}
          >
            <IconButton sx={{ p: '10px' }} aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search Google Maps'
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton
              color='primary'
              sx={{ p: '10px' }}
              aria-label='directions'
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>

          <PersonPinIcon sx={{ pl: '31px' }} />
          <FavoriteBorderIcon sx={{ pl: '21px' }} />
          <LocalMallIcon sx={{ pl: '21px' }} />
        </Grid>

        <Grid
          sx={{
            p: '21px',
            display: 'flex',
            justifyContent: 'center',
            pt: '111px',
          }}
        >
          <Grid sx={{ backgroundColor: '#e4e7ed', p: '31px' }}>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: 'orange',
                fontFamily: 'Brush Script MT',
                mb: '31px',
                borderRadius: '11px',
              }}
            >
              70% discount
            </Typography>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: '#fb641b',
                fontFamily: 'Brush Script MT',
                mb: '31px',
                borderRadius: '11px',
              }}
            >
              50% discount
            </Typography>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: '#2455f4',
                fontFamily: 'Brush Script MT',
                borderRadius: '11px',
              }}
            >
              70% discount
            </Typography>
          </Grid>
          <Grid>
            <img src={myntra} width='700px' height='500px'></img>
          </Grid>
          <Grid sx={{ backgroundColor: '#e4e7ed', p: '31px' }}>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: '#388e3c',
                fontFamily: 'Brush Script MT',
                mb: '31px',
                borderRadius: '11px',
              }}
            >
              30% discount
            </Typography>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: '#d23276',
                fontFamily: 'Brush Script MT',
                mb: '31px',
                borderRadius: '11px',
              }}
            >
              40% discount
            </Typography>
            <Typography
              variant='h3'
              sx={{
                p: '30px',
                backgroundColor: '#11c29b',
                fontFamily: 'Brush Script MT',
                borderRadius: '11px',
              }}
            >
              80% discount
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              variant='h3'
              sx={{ fontFamily: 'cursive', color: '#ff6161' }}
            >
              OMG !
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontFamily: 'cursive', color: '#258b3b' }}
            >
              DEALS{' '}
            </Typography>
            <Typography
              variant='h5'
              sx={{ ml: '-131px', fontFamily: 'bolder', color: '#0000FF;' }}
            >
              LOWER PRICES ON THE BEST BRANDS
            </Typography>
            <Button variant='contained' color='success'>
              View All {'>'}
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            p: '11px',
            mt: '21px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#00008B',
          }}
        >
          <Stack direction='column'>
            <img
              src={roadster}
              width='300px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={rd}
              width='300px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={download}
              width='300px'
              height='250px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
                backgroundColor: '#e4e7ed',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={rds}
              width='300px'
              height='250px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={rd}
              width='300px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#00008B',
            p: '11px',
          }}
        >
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={Banner}
              width='300px'
              height='200px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={clothes}
              width='300px'
              height='200px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={copy}
              width='300px'
              height='200px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={cl}
              width='300px'
              height='200px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
          <Stack direction='column' sx={{ pl: '11px' }}>
            <img
              src={images}
              width='300px'
              height='200px'
              style={{
                border: '1px solid black',
                borderTopLeftRadius: '190px',
                borderTopRightRadius: '190px',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Stack>
        </Box>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: '21px',
            pb: '7px',
          }}
        >
          <Box>
            <Typography
              variant='h3'
              sx={{ fontFamily: 'cursive', color: '#ff6161' }}
            >
              Grand
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontFamily: 'cursive', color: '#258b3b' }}
            >
              Brands{'=> '}
            </Typography>
            <Typography
              variant='h5'
              sx={{ ml: '-131px', fontWeight: 'bolder', color: '#0000FF' }}
            >
              LOWER PRICES ON THE BEST BRANDS
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            p: '11px',
            pb: '5px',
            mt: '21px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#d23276;',
            printColorAdjust: 'economy',
          }}
        >
          <Box>
            <img
              src={img7}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img8}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img4}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img6}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img7}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img8}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img9}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img10}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            p: '5px',

            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#d23276;',
          }}
        >
          <Box>
            <img
              src={img11}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img14}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img12}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img13}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img20}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img16}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img17}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
          <Box sx={{ pl: '5px' }}>
            <img
              src={img18}
              width='190px'
              height='200px'
              style={{
                border: '1px solid black',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e4e7ed',
              }}
            >
              50-80% off
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: '21px',
            pb: '7px',
          }}
        >
          <Box>
            <Typography
              variant='h3'
              sx={{ fontFamily: 'cursive', color: '#258b3b' }}
            >
              Brands tO BAG
            </Typography>
            <Typography
              variant='h5'
              sx={{ fontWeight: 'bolder', color: '#0000FF' }}
            >
              DISCOVER NEW FAVOURITES
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            p: '11px',
            pb: '5px',

            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#af7b1c',
          }}
        >
          <Box>
            <img
              src={img7}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Shirts
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img21}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Track Pants
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img23}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Joggers
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img24}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Jeans
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img25}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Active Wear
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img26}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Sweat Shirts
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img27}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Jackets
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            p: '11px',
            pb: '5px',

            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#af7b1c',
            mb: '31px',
          }}
        >
          <Box sx={{ ml: '31px' }}>
            <img
              src={img23}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Joggers
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img28}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Casual Shoes
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img29}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Sports Shoes
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img30}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Party Shoes
            </Typography>
          </Box>
          <Box sx={{ ml: '31px' }}>
            <img
              src={img31}
              width='190px'
              height='200px'
              style={{
                border: '3px solid black',
                borderRadius: '50%',
              }}
            />
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bolder',
                fontSize: '21px',
              }}
            >
              Flip-Flops
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
