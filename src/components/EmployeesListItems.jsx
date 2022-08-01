import "./EmployeesListItems.css";

const EmployeeListItem = (props) => {

   const {name, salary, onDelete, onToggle, increase, promo} = props

    return (
      <li
        className={`list-group-item d-flex justify-content-between${
          increase ? " increase" : ""
        }${promo ? " like" : ""}`}
      >
        <span className="list-group-item-label" onClick={onToggle} data-toggle="promo">{name}</span>
        <div className="d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="list-group-item-input"
            defaultValue={`${salary}$`}
          />
          <button
            type="button"
            onClick={onToggle}
            className="btn-cookie btn-sm"
            data-toggle="increase"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button 
          type="button" 
          className="btn-trash btn-sm " 
          onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }

export default EmployeeListItem;
// export const EmployeeListItem = ({ name, salary, increase }) => {
//   const [getRaise, setGetRaise] = useState(increase);

//   const raiseStatus = () => {
//     if (getRaise) {
//       setGetRaise(false);
//     } else {
//       setGetRaise(true);
//     }
//   };

//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between${
//         getRaise ? " increase" : ""
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <div className="d-flex justify-content-center align-items-center">
//         <input
//           type="text"
//           className="list-group-item-input"
//           defaultValue={`${salary}$`}
//         />
//         <button
//           type="button"
//           onClick={raiseStatus}
//           className="btn-cookie btn-sm "
//         >
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };
