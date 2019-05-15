import React from "react";
import axios from "../../config/axios";
import { Card, CardImg, CardText, CardBody,CardColumns, Button } from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";
import CardLink from "reactstrap/es/CardLink";


class Products extends React.Component{
    state={
        products:{
            results: []
        }
    };
    componentDidMount() {
        axios.get('/api/products').then(result => {
            this.setState({products: result.data})
        }).catch(error => {
            console.log({error});
        })
    }

    render() {
        console.log(this.state.products);

        return (
            <CardColumns>
            {this.state.products.results.map(card => (
                <Card key={card.product_id}>
                    <CardImg top width="100%" src="" alt={`${card.name.split(" ")[0]} Image Holder`} />
                    <CardBody>
                        <CardLink>{card.name}</CardLink>
                        {/*<CardSubtitle>{card.name}</CardSubtitle>*/}
                        <CardText>{card.description}</CardText>
                        <CardText>Price: {card.price}</CardText>
                        <CardFooter>
                            <Button>Buy</Button>
                        </CardFooter>
                    </CardBody>
                </Card>
            ))}
            </CardColumns>
        )
    }
}
export default Products;