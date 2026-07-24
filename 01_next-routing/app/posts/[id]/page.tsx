// type Props = {
//   params: Promise<{ id: string }>;
// };

// // Next.js passes 'params' as a prop to your dynamic page component
// export default async function ProductPage({ params }: Props) {
//   const resolvedParams = await params;
//   const productId = resolvedParams.id;

//   return (
//     <main style={{ padding: '2rem' }}>
//       <h1>Product Details</h1>
//       <p>Showing information for Product ID: <strong>{productId}</strong></p>
//     </main>
//   );
// }


// type Props = {
//   params: ;
// };

// Next.js passes 'params' as a prop to your dynamic page component
export default async function ProductPage({ params }: Promise<{ id: string }>) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Product Details</h1>
      <p>Showing information for Product ID: <strong>{productId}</strong></p>
    </main>
  );
}