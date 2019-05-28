import React from "react";
import { MdSearch } from "react-icons/md";

class Search extends React.Component{
    state={
        search: ""
    };
    changeHandler = e =>{
        if(e.key === "Enter"){
            this.setState({
                search: ""
            })
        }else{
            this.setState({
                search: this.state.search + e.key
            })
        }
    };
    render() {
        return(
            <div className="search">
                <input type="text" readOnly onKeyPress={this.changeHandler} value={this.state.search} className="search__input"/>
                <MdSearch/>
            </div>
        )
    }
}
export default Search;