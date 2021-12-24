import { useEffect, useState } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row, useAccordionButton } from "react-bootstrap";

import { Layout } from "../../components/Layout";
import ProductCard from "../../components/cards/ProductCard";

import data from "../../mock-api/products.json";
import "./styles.css";
import { ChevronLeft, ChevronRight, Grid, Menu, Search, X } from "react-feather";

export interface IProduct {
    id: number
    name: string
    brand: string
    price: number
    description: string
    stars?: number
    image?: string
}

export default function List({}: any) {
    const [products, setProducts] = useState<IProduct[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {
        setProducts(products.filter(product => product.name.toLocaleUpperCase().includes(searchTerm.toLocaleUpperCase())))
    }
    const handleClearSearch = () => {
        setProducts(data)
        setSearchTerm('')
    }

    const CustomToggle = ({ children, eventKey }: any) => {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
            console.log('totally custom!', eventKey)
        });

        return (
            <div onClick={decoratedOnClick}>
                {children}
            </div>
        );
    }

    const Filters = ({ noTitle }: any) => (
        <>
            {
                !noTitle && (
                    <div>
                        <span>Filters</span>
                    </div>
                )
            }
            <div className="filters-fields">
                <div className="filter-multi">
                    <div className="title">Multi Range</div>
                    <div className="fields">
                        <Form>
                            {['$ 10', '$ 10-100', '$ 100-500', '$ 500', 'All'].map(item => (
                                <Form.Check
                                    id={item}
                                    name="mult-range"
                                    type={'radio'}
                                    label={`${item}`}
                                />
                            ))}
                        </Form>
                    </div>
                </div>
                <hr />
                <div className="filter-slider">
                    <div className="title">Slider</div>
                    <div className="fields">
                        <Form>
                            <Form.Range />
                        </Form>
                    </div>
                </div>
            </div>
            <Button variant="primary" className="btn-clear-filters">CLEAR ALL FILTERS</Button>        
        </>
    )

    useEffect(() => {        
        setProducts(data)
    }, [])
    
    return (
        <Layout>
            <Row>
                <Col lg={12} className="filters-mobile">
                    <Accordion>
                        <CustomToggle
                            eventKey={"0"}
                        >
                            Filters <Menu />
                        </CustomToggle>
                        <Accordion.Collapse eventKey={"0"}>
                            <Filters noTitle />
                        </Accordion.Collapse>
                    </Accordion>
                </Col>
                <Col lg={3} className="filters">
                    <Filters />
                </Col>

                <Col >
                    <div className="order">
                        <div>7,618 results found in 5ms</div>
                        <div>
                            <Form.Select aria-label="Default select example">
                                <option>Default</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <span><Grid/></span>
                            <span><Menu /></span>
                        </div>
                    </div>
                    <div className="search">
                        <Form.Control
                            type="text"
                            placeholder="Search hear"
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                        <div>
                            <Search onClick={handleSearch} />
                            {
                                searchTerm && <X style={{marginLeft: '5px'}} onClick={handleClearSearch} />
                            }
                        </div>
                    </div>
                    <div>
                        {
                            products.length > 0 ? (
                                <>
                                    {
                                        products.map(product => (
                                            <ProductCard
                                                id={product.id}
                                                name={product.name}
                                                brand={product.brand}
                                                price={product.price}
                                                description={product.description}
                                                stars={product.stars}
                                            />
                                        ))
                                    }
                                    <div className="pagination">
                                        <div className="prev"> <ChevronLeft/> </div>
                                        <div className="pages">
                                            {[1,2,3,4,5,6,7,8,9,10].map(page => <span className={`page ${page === 1 ? 'active' : ''}`}>{page}</span>)}
                                        </div>
                                        <div className="next"> <ChevronRight/> </div>
                                    </div>
                                </>
                            ) : (
                                <h5>No results</h5>
                            )
                        }
                    </div>
                </Col>
            </Row>

        </Layout>
    )
}