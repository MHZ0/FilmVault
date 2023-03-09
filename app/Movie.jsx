import Link from "next/link"
import Image from "next/image"

export default function Movie({ title,id,poster_path,release_date}) {
    const imgpath= "https://image.tmdb.org/t/p/original/"
return (
    <div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={`/${id}`}>
        <Image
        src={imgpath + poster_path} 
        width={700} 
        height={700} 
        alt={title}
        />
        </Link>
        
    </div>
)
}