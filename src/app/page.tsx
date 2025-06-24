import { error } from "console";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  // the return value is *not* serealized
  //you can return Date,Map,Set, etc...

  //recommendation: hadle errors
  if (!res.ok) {
    //this will activate the closest 'error.js' error boundary
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6"></div>
    </div>
  );
}
