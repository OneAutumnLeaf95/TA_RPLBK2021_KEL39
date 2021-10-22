import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class product extends Component {
    state = {
        angka:0
    }
    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }
    shouldComponentUpdate(_,nextState) {
        if (this.state.angka !== nextState.angka && typeof nextState.angka === "number") {
            if (nextState.angka >5){
                alert(`SOLD OUT`)
                return false
            }
            return window.confirm('TAMBAH KE KERANJANG?')
        }
        return false
    }
    componentDidUpdate() {
        alert(`BERHASIL TAMBAH KE KERANJANG`)
    }

    render() {
        return (
        <div style={{textAlign:'center', display: 'inlineblock'}}>
            <Card hoverable style={{display: 'inline-block', width:350, margin:'30px', boxShadow:'0px 1px 1px'}}
            cover={<img alt="gambar1" height="380px" src="https://i.ibb.co/XbbGyXC/klepon.jpg" />}>
                <Meta title="Klepon" description="Rp. 5000,-" />
                <div>
                    <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                        Tambah ke Keranjang
                    </Button>
                </div>
                <Text>Total cart : {this.state.angka}</Text>
            </Card>
        </div>
        );
    }
}
export default product;