import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//axios for xml request
import axios from "axios";
//xml file reader
import XMLParser from "react-xml-parser";

const Table1 = (props) => {
  const [name, setName] = React.useState([]);
  const [attr, setAttr] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(props.dish, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        setName(jsonDataFromXml.getElementsByTagName("property"));
        setAttr(jsonDataFromXml.getElementsByTagName("attr"));
      });
    console.log("attr", attr);
  }, []);

  return (
    // bootstrap table
    <div className="container p-5">
      <table className="table table-bordered">
        <tbody>
          {attr.map((item, index) => {
            return (
              <tr style={{ backgroundColor: "#ccce"}}>
                <th key={index} scope="row">
                  {item.value}
                </th>
                <td key={index}>{name[index].value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;