import {Component} from 'react';
import Pagination from './pagination/pagination';
import Post from './post/post';
import Spinner from "./spiner/spinner";
import "./style.css"
import GiphyComponent from "./GiphyComponent/giphyStarWars";

interface IContent {
    posts: {}[],
    isLoading: boolean
}

export default class Content extends Component<IContent> {

    render() {
        return (
            <div className={"content_wrapper"}>
                <GiphyComponent/>
                {this.props.isLoading ? (
                    <Spinner/>
                ):(
                    this.props.posts.length === 0
                        ? <h3>Список постов пуст, воспользуйтесь поиском</h3>
                        : this.props.posts.map((post, index) => <Post key={index} name={post.name} description={post.created}/>)
                )}

                <Pagination/>
            </div>
        );
    }
}
