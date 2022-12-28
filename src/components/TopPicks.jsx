import React from "react"
import { useSelector } from "react-redux"
import TopProduct from "./TopProduct"

export default function TopPicks() {
    const {product} =  useSelector((state) => state.product)

  

    return (
        <section >
            <div className="container mx-auto py-12 lg:py-18 items-center ">
                <div className="items-center text-center">
                    {/* text */}
                    <h1 className="py-4">
            Top Picks For You
            </h1>
            <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p> 
                </div>
                <div>
                    <TopProduct  product={product}/>
                </div>
            </div>

        </section>
    )
}