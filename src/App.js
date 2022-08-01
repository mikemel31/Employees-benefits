import { Component } from "react";

import "./App.css";
import "bootstrap";

import { InfoPanel } from "./components/InfoPanel";
import SearchPanel from "./components/SearchPanel";
import AppFilter from "./components/AppFilter";
import { EmployeeList } from "./components/EmployeesList";
import NewEmployeeForm from "./components/NewEmployeeForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John C.",
          salary: 600,
          increase: true,
          promo: true,
          id: 1,
        },
        {
          name: "Alex V.",
          salary: 2200,
          increase: true,
          promo: true,
          id: 2,
        },
        {
          name: "Vanessa P.",
          salary: 900,
          increase: true,
          promo: false,
          id: 3,
        },
      ],
      term: "",
      filterTerm: "all",
    };
    this.maxId = 4;
  }

  onEmployeeDelete = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((employee) => employee.id !== id);
      return { data: newData };
    });
  };

  onAddEmployee = (name, salary) => {
    const newEmployee = {
      name: name,
      salary: salary,
      increase: false,
      promo: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newEmployee],
      };
    });
  };

  onToggle = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((emp) => {
          if (emp.id === id) {
            return { ...emp, [prop]: !emp[prop] };
          }
          return emp;
        }),
      };
    });
  };

  empSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((emp) => {
      return emp.name.indexOf(term) > -1;
    });
  };

  termUpdate = (term) => {
    this.setState({ term });
  };

  filterTermUpdate = (filterTerm) => {
    this.setState({filterTerm})
  }

  empFilter = (items, filterTerm) => {
    switch (filterTerm) {
      case "promo":
        return items.filter((emp) => emp.promo);
      case "more1000":
        return items.filter((emp) => emp.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filterTerm) => {
    this.setState({filterTerm});
}

  render() {
    const { data, filterTerm, term } = this.state;
    const numberOfEmployees = data.length;
    const numberOfIncrease = data.filter((emp) => emp.increase).length;
    const visibleData = this.empFilter(this.empSearch(data, term), filterTerm);

    return (
      <div className="App container">
        <InfoPanel
          numberOfEmployees={numberOfEmployees}
          numberOfIncrease={numberOfIncrease}
        />
        <div className="search_panel">
          <SearchPanel termUpdate={this.termUpdate} />
          <AppFilter onFilterSelect={this.onFilterSelect} filterTerm={filterTerm}/>
        </div>
        <EmployeeList
          data={visibleData}
          onDelete={this.onEmployeeDelete}
          onToggle={this.onToggle}
        />
        <NewEmployeeForm onAdd={this.onAddEmployee}/>
      </div>
    );
  }
}

export default App;
