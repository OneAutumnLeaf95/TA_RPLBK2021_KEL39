import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const themes = {
    light:{
        id: 1,
        foreground: '#000000',
        background: "#F2F2F2",
    },
    dark:{
        id: 2,
        foreground: "#000000",
        background: "#1A1A1A",
    },
};

const ThemeContext = React.createContext(themes.light);

function CardSaya(props) {

    return (
    <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
        <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src={props.src} alt=""></img>
        <p style={{margin:'2px'}}>{props.nama}</p>
        <p style={{margin:'2px'}}>{props.nim}</p>
        <p style={{margin:'2px'}}>{props.alamat}</p>
    </Card>
 );
}

function ThemedButton() {
    const { changeTheme } = useContext(ThemeContext);
    return (
    <button onClick={changeTheme}>
        Ganti Tema
    </button>
    );
   }

export default function MyCard() {
        const [theme, setTheme] = useState(themes.dark);
        const changeTheme = () =>{
            if (theme.id === themes.light.id){
                setTheme(themes.dark);
            }
            else{
                setTheme(themes.light);
            }
        };


        return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
                <CardSaya src="https://i.ibb.co/Nn6VT6H/Juli.jpg" nama="Juliana Santi" nim="21120118130089" alamat="Boyolali"></CardSaya>
                <CardSaya src="https://i.ibb.co/zNDdbrP/Amar.jpg" nama="Mohamad Amar Ma'ruf" nim="21120118130095" alamat="Pemalang"></CardSaya>
                <div>
                    <ThemedButton />
                </div>
            </div>
        </ThemeContext.Provider>
        );
}