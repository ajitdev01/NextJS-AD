export default async function ProductPage({ params } : any) {
    const {id} = await params;
    console.log(id)
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog Details</h1>
      <p>Showing information for Blog ID: <strong>{id}</strong></p>
    </main>
  );
}