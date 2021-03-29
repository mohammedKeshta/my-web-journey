export default function ProductDetails(props) {
  return (
    <>
      <h1>Product Details</h1>
      <code>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </code>
    </>
  );
}
