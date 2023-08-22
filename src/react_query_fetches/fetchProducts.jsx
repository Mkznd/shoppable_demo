export default async function fetchProducts({ queryKey }) {
  const pages = queryKey[1];
  const pageLimit = queryKey[2];
  const hash = import.meta.env.STOREHASH;
  const url = `http://127.0.0.1:8000/product-list/${pages}/${pageLimit}`;

  const res = await fetch(url);
  console.log(res);

  if (!res.ok) {
    throw new Error(`product list for ${hash} is not ok`);
  }

  return res.json();
}
