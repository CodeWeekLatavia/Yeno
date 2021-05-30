
import {useState, useEffect} from 'react'

import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Button} from '@material-ui/core'

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
    input:{
        
    },

    button:{
        backgroundColor:'#6E6E87',
        color:'#F4F4F5',
        margin:'1.5rem',
        '&:hover':{
            border:'solid 3px #6E6E87',
            backgroundColor:'#F4F4F5',
            color:'#6E6E87',
        }

    },
    forms:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }

})


export default function Register() {
    const [employer, setEmployer] = useState(true)
    const [visible, setVisible] = useState(true)
    const classes = useStyles();

    useEffect(()=>{
        //setVisible(false)
    },[employer])
  return (
    <div>
      <Header/>
      <div className={classes.container}>
        {visible ? <div>
            <Button onClick={()=>{setEmployer(false), setVisible(!visible)}} className={classes.button}>Jaunietis</Button>
                <Button onClick={()=>{setEmployer(true), setVisible(!visible)}} className={classes.button}>Darba Devējs</Button>
        </div> : null}
        {employer? 
            <div className={classes.form}>
                <TextField label="Vārds" variant="outlined" className={classes.input}/>
                <TextField label="Uzvārds" variant="outlined"/>
                <TextField label="Telefona numurs" variant="outlined"/>
                <TextField label="E-pasts" variant="outlined"/>
                <TextField label="Uzņēmums" variant="outlined"/>
                <Button></Button>
            </div> 
        : 
            <div>
                <TextField label="Vārds" variant="outlined"/>
                <TextField label="Uzvārds" variant="outlined"/>
                <TextField label="Dzimšanas datums" variant="outlined"/>
                <TextField label="Telefona numurs" variant="outlined"/>
                <TextField label="E-pasts" variant="outlined"/>
            </div>}
      </div>
    </div>
  )
}
