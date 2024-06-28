import React from "react";

const SearchProps = () => {
  return (
    <div className="ui-table-view-container">
    <table className="ui-table-view">
      <thead>
        <tr className="ui-table-tr">
          <th align="left">Prop</th>
          <th align="left">Type</th>
          <th align="left">Default</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="ui-code">type</p></td>
          <td>
            "date" | "datetime-local"<br/>
            "week" | "month" | "time"
          </td>
          <td>"date"</td>
          <td>Set's InputText type prop as date.</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
export default SearchProps;