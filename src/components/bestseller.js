import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Button } from 'antd';

import Product from '../components/product';
import DetailsProduct from '../components/detailsproduct';
import DetailsPicture from '../components/detailspicture';

class bestseller extends Component {
    state = {
        lihatproduct : false
    } 
    ubahlihatproduct = () => {
        this.setState(() => {
            return {lihatproduct : !this.state.lihatproduct}
        })
    }
    state = {
        lihatgambar : false
    }
    ubahlihatgambar = () => {
        this.setState(() => {
            return {lihatgambar : !this.state.lihatgambar}
        })
    }
    componentDidMount() {
        alert(`BUKA PRODUK BEST SELLER?`)
    }
    
    render() {
        return (
            <div>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <Product />
                </div>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <div style={{margin:'10px'}}>
                        <Button Align="center" type="primary" onClick={this.ubahlihatgambar}>{this.state.lihatgambar ? 'Tutup' : 'Lihat'} Detail Gambar!</Button>
                        {this.state.lihatgambar ? <DetailsPicture/> : ''}
                    </div>
                    <Button Align="center" type="primary" onClick={this.ubahlihatproduct}>{this.state.lihatproduct ? 'Tutup' : 'Lihat'} Detail Produk!</Button>
                        {this.state.lihatproduct ? <DetailsProduct/> : ''}
                </div>
            </div>
        )
    }
}
export default bestseller;