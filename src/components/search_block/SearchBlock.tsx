import React, {Component} from "react";
import SearchForms from "./forms/searchForms";
import "./style.css"
import AboutApi from "./aboutApi/about_api";

export default class SearchBlock extends Component {
    render() {
        return (
            <div className={"search_block"}>
               <SearchForms/>
                <AboutApi/>
            </div>
    )
    }
}
