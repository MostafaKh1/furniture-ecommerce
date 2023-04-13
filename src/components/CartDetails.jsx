import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTotalAmount, PlaceOrder } from "../store/cartSlice";
import CartItems from "./CartItems";
import Item from "./Item";
import LoadingItems from "./LoadingItems";

const LazyCartItems = React.lazy(() => import("./CartItems"));

function CartDetails() {
  const { cart, cartTotalAmount, LoadingOrder, OrderDone } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cart, dispatch]);

  return (
    <div className="py-12">
      <div className="container mx-auto ">
        {cart.length > 0 ? (
          <div className="flex flex-col gap-x-6 lg:flex-row justify-around ">
            <div className="">
              <div>
                <div className=" grid   grid-cols-6   py-4 max-w-[800px] lg:w-[1000px] lg:max-w-[1200x] bg-mainYellow  ">
                  <div className="col-span-2"> </div>
                  <div className="font-semibold ">Product</div>
                  <div className="font-semibold ">Price</div>
                  <div className="font-semibold">Quantity</div>
                  <div className="font-semibold">Subtotal</div>
                </div>
              </div>

              <div className="items-center py-10 ">
                {cart &&
                  cart.map((item) => (
                    <Suspense fallback={<LoadingItems />}>
                      <LazyCartItems
                        key={item?.id}
                        id={item?.id}
                        title={item?.title}
                        img={item?.img}
                        price={item?.price}
                        cartCount={item?.cartCount}
                      />
                    </Suspense>
                  ))}
              </div>
            </div>

            <div className=" bg-mainYellow flex flex-col gap-y-6 px-8 rounded-md lg:gap-y-16 text-center max-h-[500px] justify-center py-12 lg:w-[400px]">
              <h2 className="font-semibold text-3xl pb-12">Cart Totals</h2>
              <div className="flex justify-center gap-x-12">
                <div>Subtotal</div>
                <div className="text-gray-500">$ {cartTotalAmount}</div>
              </div>
              <div className="flex justify-center gap-x-12">
                <div className="font-semibold ">Total</div>
                <span className="text-[#B88E2F]">$ {cartTotalAmount}</span>
              </div>

              <div>
                <button
                  className="add-cart w-full lg:w-[200px]"
                  onClick={() => dispatch(PlaceOrder(cart))}
                >
                  {LoadingOrder ? "Ordering" : "Check out"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="flex justify-center text-3xl py-12">
            Cart is Empty.....
          </h1>
        )}
      </div>
    </div>
  );
}

export default CartDetails;
