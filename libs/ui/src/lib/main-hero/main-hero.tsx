import styled from '@emotion/styled';
import { css } from '@emotion/react'
import { Grid, Typography, Button, Box } from '@mui/material';

/* eslint-disable-next-line */
export interface MainHeroProps {}

const StyledMainHero = styled.div`

`;

const styles = {
  header: {
    backgroundColor: 'primary.main',
    mb: '1.45rem' // margin bottom
  },
  link: {
    color: 'primary.contrastText',
    textDecoration: 'none'
  },
  title: {
    my: 0,  // top/bottom margin
    mx: 'auto', // left/right margin
    maxWidth: 960,
    py: '1.45rem', // top/bottom padding
    px: '1.0875rem' // left/right padding
  },
  heroBox: { // to be used with none MUI components
    width: '100%',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: { // to be used with none MUI components
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1300px',
    padding: '50px',
  },
  atitle: { // to be used with none MUI components
    paddingBottom: '15px',
  },
  subtitle: { // to be used with none MUI components
    opacity: '0.4',
    paddingBottom: '30px',
  },
  largeImage: css({
    width: '100%'
  })
}

export function MainHero(props: MainHeroProps) {
  const imgUrl = "https://placekitten.com/640/360";
  return (
    
        <Box sx={styles.heroBox}>
      <Grid container spacing={6} sx={styles.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} sx={styles.atitle}>
            Welcome to Comminity!
          </Typography>
          <Typography variant="h6" sx={styles.subtitle}>
            We use fancy kitty tech to take the guess-work out of volunteering. Fill out our quick signup and we'll start finding you opportunities!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          { <img src={imgUrl} alt="My Team" css={styles.largeImage} /> }
        </Grid>
      </Grid>
    </Box>
    
  );
}

// export default MainHero;
