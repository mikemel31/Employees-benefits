import EmployeeListItem from "./EmployeesListItems";
import "./EmployeesList.css";

export const EmployeeList = ({ data, onDelete, onToggle }) => {
  return (
    <ul className="app-list list-group">
      {data.map((employee) => {
        const { id, ...restProps } = employee;
        return (
          <EmployeeListItem
            key={id}
            {...restProps}
            onDelete={() => {
              onDelete(id);
            }}
            onToggle={(e) => {
              onToggle(id, e.currentTarget.getAttribute("data-toggle"));
            }}
          />
        );
      })}
    </ul>
  );
};
