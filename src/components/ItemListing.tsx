// ItemListings.jsx
import React from "react";
import { RenderItems } from "./RenderItems";

export default function ItemListing({cartItems}) {
  return (
      <RenderItems cartItems={cartItems} />
  );
}