export default async function Path({params} : any) {
    console.log(await params);
    const response = await params;
  return (
    <>
      <h1>Image Path</h1>
      <h2>Path : /{response.path.join('/')}</h2>
    </>
  )
}
