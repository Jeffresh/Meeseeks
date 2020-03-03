// import { Box, Container, Grid, Link, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
// import React from 'react'

// const useStyles = makeStyles(theme => ({
//   footer: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     marginTop: theme.spacing(8),
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),
//     [theme.breakpoints.up('sm')]: {
//       paddingTop: theme.spacing(6),
//       paddingBottom: theme.spacing(6),
//     },
//   },
// }))

// const footers = [
//   {
//     title: 'Features',
//     description: ['Characters', 'Episodes', 'Planets'],
//   },
//   {
//     title: 'Resources',
//     description: ['Rick &  Morty Api', 'Repo', 'React', 'Material-UI'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ]
// const Copyright = (): JSX.Element => {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href=" ">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   )
// }

// export const Footer = (): JSX.Element => {
//   const classes = useStyles()

//   return (
//     <Container maxWidth="md" component="footer" className={classes.footer}>
//       <Grid container spacing={4} justify="space-evenly">
//         {footers.map(footer => (
//           <Grid item xs={6} sm={3} key={footer.title}>
//             <Typography variant="h6" color="textPrimary" gutterBottom>
//               {footer.title}
//             </Typography>
//             <ul>
//               {footer.description.map(item => (
//                 <li key={item}>
//                   <Link href=" " variant="subtitle1" color="textSecondary">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </Grid>
//         ))}
//       </Grid>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   )
// }

import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { RFC } from '~Types/react'

const SFooter = styled.footer``

export const Footer: RFC = () => {
  return (
    <Grid container spacing={4} justify="space-evenly">
      <SFooter>hello</SFooter>
    </Grid>
  )
}
