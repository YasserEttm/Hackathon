import { useEffect,  useRef, useState } from "react";
import logo from '../Assets/ResQ-logo.png';
import "./Form.css";
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  LinearProgress
} from "@mui/material";

const Form = () => {
    
    const toast = useRef(null);
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
                navigate("/home")
                return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 250);
    
        return () => {
          clearInterval(timer);
        };
      }, [navigate]);

    return (
      <Grid container className="gridStyle">
        <Toast ref={toast} />
        <div className="welcomeDiv">
            <img src={logo} alt="logo" className="img-fluid" width={500}/>
            <div className="hh"/>
            <Box className=""
            color={{}}
            sx={{ width: '84%' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
      </Grid>
    );
}

export default Form;