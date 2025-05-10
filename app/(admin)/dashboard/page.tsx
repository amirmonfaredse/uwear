export default async function Page() {
  const data = await fetch("http://localhost:3000/api/products");
  const products = await data.json();
  console.log(products);
  return <div></div>;
}
