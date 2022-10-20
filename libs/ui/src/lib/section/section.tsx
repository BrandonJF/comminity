import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { css } from '@emotion/react';


/* eslint-disable-next-line */
export interface SectionProps {}

const StyledSection = styled.div`
  // color: pink;
`;

const styles = {
  sectionGridContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '500px',
  }),
  sectionGridItem: css({
    backgroundColor: '#f2f0f1',
    textAlign: 'center',
    padding: '30px',
    width: '200px',
    borderRadius: '10px',
    margin: '10px !important',
  })
}


export function Section(props: SectionProps) {

  const sectionItems = [
    {
      id: 1,
      icon: <AccessAlarmIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Solving world problems through various web applications using efficient programs and tools',
    },
    {
      id: 2,
      icon: <AccessAlarmIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Through team work, we collaborate and deliver quality projects of high standards',
    },
    {
      id: 3,
      icon: <AccessAlarmIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Flexible payment plan is applicable to all our services',
    },
  ];
  
  return (
    <StyledSection>
       <Grid container css={styles.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            css={styles.sectionGridItem}
          >
            {item.icon}
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
    </StyledSection>
  );
}

export default Section;
