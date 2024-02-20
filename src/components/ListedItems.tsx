import React, { useState } from "react";
import ItemListing from "./ItemListing";

export function ListedItems() {
    const [cartItems] = useState([]);
    return (
        <ItemListing cartItems={cartItems} />
    );
}

