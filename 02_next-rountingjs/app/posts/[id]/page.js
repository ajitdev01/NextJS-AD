export default async function Post({params}) {
    const {id} =await params;
    // console.log(id)
    // console.log(params)

  return (
    <div>Single post of {id}</div>
  )
}

