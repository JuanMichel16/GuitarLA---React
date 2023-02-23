import Post from "./post";

const ListadoPosts = ({posts}) => {
    return ( 
        <>
            <h2 className="heading">Blogs</h2>
            <div className="blog">
                {posts?.length > 0 && (
                    posts?.map(post => (
                        <Post key={post.id} post={post.attributes} />
                    ))
                )}
            </div>
        </>
    );
}
 
export default ListadoPosts;