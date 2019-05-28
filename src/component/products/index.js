import React from "react";
import axios from "../../config/axios";
import { Card, CardImg, CardText, CardBody,CardColumns, Button } from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import "./Nav.css"

class Products extends React.Component{
    state={
        products:[]
    };
    componentDidMount() {
        axios.get('/api/products')
            .then(result => {
                this.setState({products: result.data.results});
        }).catch(error => {
            console.log({error});
        })
    }

    render() {
        return (
            <CardColumns>
            {this.state.products.map(product => (
                <Card key={product.product_id} className={"card"}>
                    <CardImg top width="100%" src={`${process.env.REACT_APP_API_URL}static/img/${product.image}`} alt={`${product.name.split(" ")[0]} Image Holder`} />
                    <CardBody>
                        <CardText>{product.name}</CardText>
                        <CardText>{
                            product.description.length > 100?
                            product.description.slice(0, 100) + "..." : product.description
                        }</CardText>
                        <CardText>Price: {product.price}</CardText>
                        <CardFooter>
                            <Button onClick={() => this.props.addItem (product)}>Buy</Button>
                        </CardFooter>
                    </CardBody>
                </Card>
            ))}
            </CardColumns>
        )
    }
}
export default Products;