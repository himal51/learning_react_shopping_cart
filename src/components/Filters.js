import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
    const { productState: { byStock, byFastDelivery, bySort, byRating }, productDispatch, searchQuery } = CartState();
    // const { productState: { bySort, byStock, byFastDelivery, byRating, searchQuery }, productDispatch } = CartState();
    // console.log("bySort:", bySort, "byStock:", byStock, "byFastDelivery:", byFastDelivery, "byRating:", byRating, "searchQuery:", searchQuery);
    console.log("byStock", byStock, "byFastDelivery", byFastDelivery, "bySort", bySort, "byRating", byRating, "searchQuery", searchQuery);

    return (<div className="filters">
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange={() =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })
                }
                checked={bySort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={() =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow",
                    })
                }
                checked={bySort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Include Out of Stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
                onChange={(e) => productDispatch({ type: 'FILTER_BY_STOCK' })}
                checked={byStock}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`inline-4`}
                onChange={(e) => productDispatch({ type: 'FILTER_BY_DELIVERY' })}
                checked={byFastDelivery}
            />
        </span>
        <span>
            <label htmlFor="" style={{ paddingRight: 10 }}>Rating:</label>
            <Rating
                rating={byRating}
                onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })}
                style={{ cursor: 'pointer' }}
            />
        </span>
        <Button variant="light" onClick={(e) => productDispatch({ type: 'CLEAR_FILTER' })}> Clear Filters</Button>

    </div >);
};

export default Filters;
