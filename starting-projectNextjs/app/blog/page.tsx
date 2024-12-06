import Link from "next/link";

export default function BlogPage(){
    return(
        <main>
            <h2>Blogs page</h2>
            <p>
            <Link href="/blog/first">First blog</Link>
            </p>
            <p>
            <Link href="/blog/second">Second blog</Link>
            </p>
           
           

        </main>
    )
}