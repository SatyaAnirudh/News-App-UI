import React, { useContext } from "react";
import { store } from "../App";

function DropDown(props) {
  const { handleChange } = props;
  const [sites, setsites] = useContext(store);

  let optionTemplate = sites?.map((site) => (
    <option key={site.siteId} value={site.siteTitle}>
      {site.siteTitle}
    </option>
  ));

  /*
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

  */

  return (
    <div>
      <form>
        <label className="d-inline-flex p-4 font-weight-bold">
          Add your favorite News Site:
          <select
            className="form-control-sm"
            id="newsSiteDropdown"
            onChange={handleChange}
          >
            {optionTemplate}
          </select>
        </label>
      </form>
    </div>
  );
}

export default DropDown;
