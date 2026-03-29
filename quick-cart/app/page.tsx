import { Suspense } from "react";
import ShoppingGrid from "@/components/shopping/shopping-grid";
import Loading from "@/components/loading";



export default function Home() {

  const addItemToCart = () => {

  }

  const removeItemFromCart = () => {

  }

  return (
    <main className="h-screen">
      <h1>Test</h1>
      <Suspense fallback={<Loading/>}>
        <ShoppingGrid addToCart={addItemToCart}/>
      </Suspense>
    </main>
  );
}
