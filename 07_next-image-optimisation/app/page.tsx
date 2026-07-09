import Image from "next/image";
export default function Home() {

  async function PostImage({imageFilename,alt,}: {imageFilename: string, alt: string
  }) {
    const { default: image } = await import(
      `../public/${imageFilename}`
    )
    // image contains width, height, and blurDataURL
    return <Image src={image} alt={alt} />
  }
  return (
    <div className="">
      {/* <img src="/strawberry.jpg" width="500" height="200" alt="" /> */}
      {/* <img src="/cjp.png" width="500" height="200" alt="" /> */}
      {/* <Image src="/cjp.png" width="500" height="200" alt="CJP Party" /> */}

      {/* insert image */}
      <PostImage imageFilename="cjp.png" alt="image" />


    </div>
  );
}
