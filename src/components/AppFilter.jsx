const AppFilter = (props) => {
  const buttonsData = [
    { dataTag: "all", label: "All employees" },
    { dataTag: "promo", label: "Getting promotion" },
    { dataTag: "more1000", label: "Salary >1000$" },
  ];

  const buttons = buttonsData.map(({ dataTag, label }) => {
    const active = props.filterTerm === dataTag;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        key={dataTag}
        onClick={() => props.onFilterSelect(dataTag)}
        type="button"
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group" id="filter">
      {buttons}
    </div>
  );
};

export default AppFilter;
