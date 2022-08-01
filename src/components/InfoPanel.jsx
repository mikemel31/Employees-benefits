import "./InfoPanel.css";

export const InfoPanel = ({ numberOfEmployees, numberOfIncrease }) => {
  return (
    <div className="info_panel mt-3" style={{ maxWidth: "800px" }}>
      <h3>Employees list of company</h3>
      <h4>{`Total number of employees - ${numberOfEmployees}`}</h4>
      <h4>{`Number of employees getting bonus - ${numberOfIncrease}`}</h4>
    </div>
  );
};
