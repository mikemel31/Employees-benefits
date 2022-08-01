import { Component } from "react"

class NewEmployeeForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: 0,
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        this.props.onAdd(name, salary)
        this.setState({
            name: '',
            salary: 0
        })

    }

    render () {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onFormSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name" 
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        />
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default NewEmployeeForm