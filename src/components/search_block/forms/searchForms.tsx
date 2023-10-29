import React, {Component} from 'react';
import SearchButton from '../buttons/searchButton/searchButton';
import InputSearch from '../inputs/search/inputSearch';
import './style.css';
import ApiUrl from '../api_url/api_url';
import ApiService from "../../../helpers/Api/api_service";

interface SearchFormsInterface {
    postsHandlerChange: (posts) => void;
    isLoadingHandler: (value:boolean) => void;
}
export default class SearchForms extends Component<SearchFormsInterface> {
    state = {
        formData: '',
        searchValue: '',
    };
    submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        this.props.isLoadingHandler(true)
        console.log("TRUE")
        e.preventDefault();
        const queryFromUser = this.state.searchValue
        const data = await ApiService.response(queryFromUser)
        this.props.isLoadingHandler(false)
        console.log("FALSE")
        this.props.postsHandlerChange(data.results)


    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchValue: (this.state.searchValue = e.target.value),
        });
    };

    render() {
        const {postsHandlerChange} = this.props
        return (
            <form className="form_search" onSubmit={(e) => this.submitHandler(e)}>
                <ApiUrl/>
                <InputSearch
                    searchValue={this.state.searchValue}
                    onChange={this.handleInputChange}
                />
                <SearchButton/>
            </form>
        );
    }
}
