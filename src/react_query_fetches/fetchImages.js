export default async function fetchImages({ queryKey }) {
  const id = queryKey[1];

  const url = `http://127.0.0.1:8000/product-images/${id}/`;

  const res = await fetch(url);
  console.log(res);

  if (!res.ok) {
    throw new Error(`product images for ${id} is not ok`);
  }

  return res.json();
}
