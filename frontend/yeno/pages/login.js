import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import {Box,Container, Grid, Avatar, Card, Typography, CardContent, CardMedia} from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        


        '@media (min-width: 1500)':{
            height:'10rem',
        },
        '@media (min-width: 1000px)':{
            paddingTop:'10rem',
            marginBottom:'5rem',
            height:'10rem',
            
        },
        '@media (mix-width: 600px)':{
            //paddingTop:'none',
            height:'10rem',

        }
    },
    title:{
        fontFamily:'Fredoka One',
        fontStyle: "normal",
        fontSize:'80px',
        color:'#6E6E87',
        marginTop:'0',
        transform:'translateY(-70px)',
        
    },
    logo:{
        width:'10rem',
        marginBottom:'0',
        zIndex:'-1',
        transform:'translateX(50px)',
    }

})

export default function Login() {

const classes = useStyles();
  return (
    <div>
      <Header/>
    </div>
  )
}
