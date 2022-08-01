import { Component } from "react";

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    termUpdate = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.termUpdate(term);
    }

  render() {

    return (
      <input
        type="text"
        name="search"
        id="empSearch"
        className="form-control search_input"
        placeholder="Type employee name"
        value={this.state.term}
        onInput={this.termUpdate}
      />
    );
  }
}

export default SearchPanel