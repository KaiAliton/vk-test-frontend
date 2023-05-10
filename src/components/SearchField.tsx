import {Component} from "react";

export default class SearchField extends Component<{ value: any, handleSearch: any }> {
    render() {
        const {
            value,
            handleSearch
        } = this.props;
        return (
            <div className="form-control mt-5">
                <input type="text" value={value} onChange={handleSearch} placeholder="Найти друзей"
                       className="input input-bordered  bg-accent"/>
            </div>
        );
    }
}
