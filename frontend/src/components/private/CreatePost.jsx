import CreatePostCSS from "./CreatePost.module.css";

function CreatePost() {
    return (
        <div className={CreatePostCSS["main-container"]}>
            <form className={CreatePostCSS["create-form"]}>
                <div className={CreatePostCSS["input-field"]}>
                    <input type="text" placeholder="Title" />
                </div>
                <div className={CreatePostCSS["input-field"]}>
                    <input type="text" placeholder="Description" />
                </div>

                <div className={CreatePostCSS["middle-fields"]}>
                    <div className={CreatePostCSS["input-field"]} id={CreatePostCSS["file-input-container"]}>
                        <input type="file" id={CreatePostCSS["file-input"]} />
                    </div>
                    <div className={CreatePostCSS["input-field"]} id={CreatePostCSS["dropdown-container"]}>
                        <select className={CreatePostCSS["select-category"]}>
                            <option value="">Select Category</option>
                            <option value="tech">Technology</option>
                            <option value="health">Health</option>
                            <option value="lifestyle">Lifestyle</option>
                        </select>
                    </div>
                </div>

                <div className={CreatePostCSS["input-field"]} id={CreatePostCSS["text-area-input"]}>
                    <textarea placeholder="Content"></textarea>
                </div>
                <div className={CreatePostCSS["create-button-container"]}>
                    <button className={CreatePostCSS["create-button"]}>Create Post</button>
                </div>
            </form>
        </div>
    );
}
export default CreatePost;