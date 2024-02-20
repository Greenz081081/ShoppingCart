import React from "react";
import Image from "next/image";

export function RenderItems({cartItems}) {
  // Check if cartItems is undefined or null
  if (!cartItems) return null;

  return (
    <ul className="list text-left ml-20 mt-20">
      <h1 className="text-center text-4xl font-thin">Selected Items</h1>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.title}
          <Image
            className="border p-2"
            width={400}
            height={200}
            src={item.image} 
            alt="Product Image"
          />
          <button
            // onClick={() => deleteItem(item.id)} // Assuming deleteItem function is defined elsewhere
            className="btn btn-danger border rounded-sm 
            hover:-translate-y-1 hover:scale-110 duration-300 p-1 w-24 ml-8 mb-5 text-error"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}