import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Typography, Modal } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
const { Text } = Typography;

function Counter() {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (count > 0) {
            alert(`KERANJANG DIUPDATE!`);
        }
    }, [count]);

    return (
        <div>
            <div>
                <Button type="primary" shape="round" style={{ margin: '15px 25px 0px 25px' }} onClick={countUp}>
                    +
                </Button>
            </div>
            <div>
                <Button type="danger" shape="round" style={{ margin: '7px 25px 0px 25px' }} onClick={countDown}>
                    -
                </Button>
            </div>
            <Text>Total Pesanan : {count}</Text>
        </div>
    );
}

export default class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: [],
            visible: false,
            name: "",
            price: "",
            image_link: "",
            title: "",
            desc: "",
            open: false
        };
    }

    cardModal = (title,des) => {
        this.setState({
            name : title,
            desc : des,
            open : true
        })
    }

    handleOk = () => {
        this.setState({
            open : false
        })
    }
    
    componentDidMount() {
        axios({
            method: "get",
            url: "https://api.jsonbin.io/b/615fe7294a82881d6c5d072f/2",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    shop: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.shop.map((results) => {
                    return (
                            <div key={results.id} style={{ textAlign: 'center', display: 'inline-block' }}>
                            <Card hoverable 
                                style={{ textAlign: 'center', display: 'inline-block', width: 350, margin: '30px', boxShadow: '1px 2px 1px 0.1px', borderRadius: '20px' }}
                                cover={<img alt="gambar1" maxWidth="50px" src={results.image_link} />}>
                                <Meta title={results.name} description={results.price} />
                                <div>
                                    <br></br>
                                    <Button type="primary" onClick={() => {
                                        this.cardModal(
                                            results.name,
                                            results.desc
                                        )
                                    }}>Detail</Button>
                                    <p>------------</p>
                                    <p>Masukkan ke Keranjang</p>
                                </div>
                                <div>
                                    <Counter />
                                </div>
                            </Card>
                        </div>
                    );
                })}

                <Modal visible={this.state.open} onCancel={this.handleOk} onOk={this.handleOk}>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.desc}</p>
                </Modal>
            </div>
        );
    }
}