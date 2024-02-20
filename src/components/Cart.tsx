import React, { useState, useEffect } from "react";
import Image from "next/image";
import  ItemListing  from "./ItemListing";

export default function App() {
  const [cartData, setCartData] = useState(null);
  const [newItem, setNewItem] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Parse the JSON data and set it to the state
    const jsonData = {
      "items": [
        {
          "image": "/images/pngwing.com-1.png",
          "cart_id": "123456789",
          "product_id": "P001",
          "name": "Laptop",
          "price": 999.99,
          "quantity": 1
        },
        {
          "image": "/images/Headphone.png",
          "product_id": "P002",
          "name": "Headphones",
          "price": 79.99,
          "quantity": 2
        },
        {
          "image": "/images/Wireless Mouse.png",
          "product_id": "P003",
          "name": "Wireless Mouse",
          "price": 29.99,
          "quantity": 1
        },
        {
          "image": "/images/BackPack.png",
          "product_id": "P004",
          "name": "Backpack",
          "price": 49.99,
          "quantity": 1
        }
      ],
      "total_items": 5,
      "total_price": 1239.95
    };
    setCartData(jsonData);
  }, []);

  function handleAddToCart(e, newItem) {
    e.preventDefault();
  
    const selectedItem = cartData.items.find(item => item.name === newItem);
    if (selectedItem) {
      setCartItems(currentItems => [
        ...currentItems,
        {
          id: crypto.randomUUID(),
          title: selectedItem.name,
          image: selectedItem.image,
          price: selectedItem.price,
          quantity: selectedItem.quantity,
          completed: false
        }
      ]);
    }
  }

  function Alert () {
   alert("Your item has been added to cart")
  }
  // console.log(`The new item is ${newItem}`)

  return (
    <div className="bg-cover h-full grid grid-cols-4">
      <div className="p-1 w-auto mx-auto h-full col-start-1 col-end-3">
        <section className="mt-8 p-1 w-fit h-full ">
          <div className="h-full my-4 md:my-20 md:mx-auto mx-0 p-10 
          rounded-md bg-white bg-opacity-20">
            <h1 className="text-center text-4xl -mt-20 mb-8">Available Items</h1>
            {cartData && (
              <ul>
                {cartData.items.map((item, index) => (
                  <div className="row-start-1 row-end-6 block" key={index}>
                    <div className="shadow-lg shadow-black mt-40">
                      <Image
                        className="border p-2"
                        width={400}
                        height={200}
                        src={item.image} 
                        alt="Product Image"
                      />
                    </div>
                    <li className="mt-10 row-start-1 row-end-4">
                      <strong>{item.name}:</strong> ${item.price} - Quantity: {item.quantity}
                    </li>
                    {/* Use Next.js Link component for navigation */}
                    <div onClick={Alert}>
                      <button onClick={(e) => handleAddToCart(e, item.name)} className="border rounded-sm mt-4 ml-4 mr-10 md:ml-0 p-2 w-40 shadow-lg shadow-black hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-highlight">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
      <div className="col-start-3 col-end-4">
        <ItemListing cartItems={cartItems} />
      </div>
    </div>
  );
}

