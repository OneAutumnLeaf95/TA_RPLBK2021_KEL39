import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class detailspicture extends Component {

    componentWillUnmount() {
        alert('TUTUP DETAIL GAMBAR?')
    }
    
    render() {
        return (
        <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
            <Row justify="center">
                <Col>
                    <Image width={150} src="https://i.ibb.co/XbbGyXC/klepon.jpg"/>
                </Col>
                <Col>
                    <Image width={150} src="https://i.ibb.co/sqkC56w/klepon2.jpg"/>
                </Col>
                <Col>
                    <Image width={150} src="https://i.ibb.co/wgcTQwt/klepon3.jpg"/>
                </Col>
            </Row>
        </Card>
        );
    }
}
export default detailspicture;