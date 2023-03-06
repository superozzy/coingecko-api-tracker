import { FormGroup, FormControl } from "react-bootstrap";

const SelectRage = ({ rangePerPage }) => {
  return (
    <form>
      <FormGroup controlId="formControlsSelect" className="filter-input">
        <FormControl
          componentClass="select"
          placeholder="Filter"
          style={{ width: "10rem", cursor: "pointer" }}
          onChange={(e) => rangePerPage(e.target.value)}
        >
          <option className="options" value="10">
            10
          </option>
          <option className="options" value="20">
            20
          </option>
          <option className="options" value="50">
            50
          </option>
          <option className="options" value="100">
            100
          </option>
        </FormControl>
      </FormGroup>
    </form>
  );
};

export default SelectRage;
