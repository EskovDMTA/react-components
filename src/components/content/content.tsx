import {Component} from "react";
import Pagination from "./pagination/pagination";
import Post from "./post/post";

export default class Content extends Component {
    render() {
        return (
            <div>
                <h1>Content Block</h1>
                <Post/>
                <Pagination/>
            </div>
        )
    }
}
