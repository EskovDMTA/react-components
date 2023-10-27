import React, {Component} from "react";
import SearchButton from "../buttons/searchButton/searchButton";
import InputSearch from "../inputs/search/inputSearch";
import "./style.css"
import ApiUrl from "../api_url/api_url";

export default class SearchForms extends Component {
    state = {
        formData: "",
        searchValue: ""
    }
    submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(this.state.searchValue)
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchValue: this.state.searchValue = e.target.value
        })
    }
    render() {
        return (
                <form className="form_search"
                onSubmit={(e) => this.submitHandler(e)}>
                    <ApiUrl/>
                    <InputSearch searchValue={this.state.searchValue}  onChange={this.handleInputChange}/>
                    <SearchButton/>
                </form>
        )
    }
}
