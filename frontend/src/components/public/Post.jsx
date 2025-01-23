import Card from "./Card";
import PostCSS from "./Post.module.css"
function Post() {
    return (
        <div className={PostCSS["post-container"]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default Post;