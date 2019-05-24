import React from "react";
import axios from "../../config/axios";
import { Card, CardImg, CardText, CardBody,CardColumns, Button } from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CardLink from "reactstrap/es/CardLink";


class Products extends React.Component{
    state={
        products:[]
    };
    componentDidMount() {
        axios.get('/api/products').then(result => {
            this.setState({products: result.data});
            console.log("products are", result);
        }).catch(error => {
            console.log({error});
        })
    }

    render() {
        console.log(this.state.products);

        return (
            <CardColumns>
            {this.state.products.map(product => (
                <Card key={product.product_id}>
                    <CardImg top width="100%" src="" alt={`${product.name.split(" ")[0]} Image Holder`} />
                    <CardBody>
                        <CardLink>{product.name}</CardLink>
                        {/*<CardSubtitle>{card.name}</CardSubtitle>*/}
                        <CardText>{product.description}</CardText>
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