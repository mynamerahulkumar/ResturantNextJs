export default function BlogPage({params}){
    return(
        <main>
            <h2>Blog page detail</h2>
            <h2>{params.slug}</h2>
        </main>
    )
}