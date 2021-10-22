import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class detailsproduct extends Component {
    state = {
        lihatbenefit : false
    }
    ubahlihatbenefit = () => {
        this.setState(() => {
            return {lihatbenefit : !this.state.lihatbenefit}
        })
    }
    componentWillUnmount() {
        alert('TUTUP DETAIL PRODUK?')
    }

    render() {
        return (
        <Card hoverable title=" Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
            <p style={{margin:'2px'}}>Nama Produk : Klepon</p>
            <p style={{margin:'2px'}}>Jenis : Dessert</p>
            <p style={{margin:'2px'}}>Harga : Rp. 5000,-</p>
            <p style={{margin:'2px'}}>Sisa : 5</p>
            <div style={{Align:'center', display: 'inlineblock'}}>
                <a onClick={this.ubahlihatbenefit}>{this.state.lihatbenefit ? 'Minimize' : 'Lihat'} PROMO!</a>
                {this.state.lihatbenefit ? <p>DISKON 30%</p> : ''}
            </div>
        </Card>
        );
    }
}

export default detailsproduct;