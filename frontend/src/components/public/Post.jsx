import Card from "./Card";
import PostCSS from "./Post.module.css"
function Post() {
    return (
        <>
            <div className={PostCSS["select-container"]}>
                <select className={PostCSS["select-input"]}>
                    <option value="">Select Category</option>
                    <option value="tech">Technology</option>
                    <option value="health">Health</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>
            </div>
            <div className={PostCSS["post-container"]}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default Post;