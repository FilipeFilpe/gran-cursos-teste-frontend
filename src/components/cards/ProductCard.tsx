import { Button, Col, Row } from "react-bootstrap";
import { Heart, ShoppingCart, ShoppingBag, Star } from 'react-feather';

import "./styles.css"
import defaultImg from '../../assets/images/products/default.png';

interface ProductCardProps {
    id: number
    name: string
    brand: string
    price: number
    description: string
    stars?: number
    image?: string
}

export default function ProductCard({
    id,
    name,
    brand,
    price,
    description,
    stars,
    image,
}: ProductCardProps) {
    return (
        <Row className="product-card">
            <Col className="product-card-image">
                <img src={image || defaultImg} alt={`Thumbnail ${name}`} className="product-card-image" />
            </Col>
            <Col xl={7} xxl={7} md={12} sm={12} className="product-card-body">
                <div className="header">
                    <span>{name}</span>
                    <div>
                        By <strong>{brand}</strong>
                    </div>
                </div>
                <div className="content">
                    {description}
                </div>

                <div className="divider"></div>
            </Col>
            <Col>
                <div className="d-flex justify-content-end rating">
                    {
                        stars && (
                            <span>
                                {stars}
                                <Star size={17} />
                            </span>
                        )
                    }
                </div>
                <div className="text-center p-2 price">
                    <span>
                        ${price}
                    </span>
                    <div>
                        <ShoppingCart /> Free Shipping
                    </div>
                </div>
                <div className="actions">
                    <Button variant="primary"> <Heart size={17} /> WISHLIST </Button>
                    <Button variant="success"> <ShoppingBag size={17} /> ADD TO CART</Button>
                </div>
            </Col>
        </Row>
    )
}