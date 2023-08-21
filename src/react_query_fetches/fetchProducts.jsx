export default async function fetchProducts({ queryKey }) {
  const pages = queryKey[1];
  const pageLimit = queryKey[2];
  const hash = "ijmkss4dfj";
  const baseUrl = `http://127.0.0.1:8000/product-list/${pages}/${pageLimit}`;

  const res = await fetch(baseUrl);

  if (!res.ok) {
    throw new Error(`product list for ${hash} is not ok`);
  }

  return res.json();
}
