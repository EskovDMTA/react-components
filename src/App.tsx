import './App.css';
import Content from './components/content/content';
import SearchBlock from './components/search_block/SearchBlock';
import {Component} from "react";

export default class App extends Component{
    state = {
        posts: [],
        isLoading: false,
        totalPostsCount: 0,
        totalPagesCount: 0,
    }
    postsHandler = (posts) => {
        this.setState({
            posts: posts
        })
    }

    totalPostsCountHandler = (count: number) => {
        this.setState({
            totalPostsCount: count
        })
    }

    totalPagesCountHandler = (count: number) => {
        this.setState({
            totalPostsCount: count
        })
    }


    isLoadingHandler = (isLoading:boolean) => {
        this.setState({isLoading})
    }
    render() {
        return (
            <div className={""}>
                <SearchBlock isLoadingHandler={this.isLoadingHandler} postsHandlerChange={this.postsHandler}/>
                <Content isLoading={this.state.isLoading} posts={this.state.posts}/>
            </div>
        );
    }
}
