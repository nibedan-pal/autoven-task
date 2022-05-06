import React from "react";
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class OrderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
        {
          Vehicle: "BMW",
          Date: "30, Jul 2013 09:24 AM",
          Location: "Hauz Khas, Enclave, New Delhi, Delhi, India",
          Speed: 42,
        },
        {
          Vehicle: "Honda CBR",
          Date: "30, Jul 2013 12:00 AM",
          Location: "Military Road,  West Bengal 734013,  India",
          Speed: 0,
        },
        {
          Vehicle: "Supra",
          Date: "30, Jul 2013 07:53 AM",
          Location: "Sec-45, St. Angel's School, Gurgaon, Haryana, India",
          Speed: 58,
        },
        {
          Vehicle: "Land Cruiser",
          Date: "30, Jul 2013 09:35 AM",
          Location: "DLF Phase I, Marble Market, Gurgaon, Haryana, India",
          Speed: 83,
        },
        {
          Vehicle: "Suzuki Swift",
          Date: "30, Jul 2013 12:02 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Civic",
          Date: "30, Jul 2013 12:00 AM",
          Location:
            "Behind Central Bank RO, Ram Krishna Rd by-lane, Siliguri, West Bengal, India",
          Speed: 0,
        },
        {
          Vehicle: "Honda Accord",
          Date: "30, Jul 2013 11:05 AM",
          Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
          Speed: 71,
        },
      ],
    };
  }

  updateTableData() {
    this.state.tabledata.push({
      Vehicle: "LG",
      Date: "30, Jul 2013 11:05 AM",
      Location: "DLF Phase IV, Super Mart 1, Gurgaon, Haryana, India",
      Speed: 712,
    });
  }
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });

    //datepicker on change
    $(".dateadded").on("change", function (ret) {
      var v = ret.target.value; // getting search input value

      $("#example").DataTable().columns(3).search(v).draw();
    });
  }
  render() {
    //Datatable HTML

    return (
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Vehicle Dashboard </h2>
        </div>

        <div className="card mb-4 shadow-sm">
          <header className="card-header bg-white">
            <div className="row gx-3 py-3">
              <form >
                <div style={{ display: "flex", gap: "10px" }}>
                <div class="form-group">
                  <label for="VehicleID">Vehicle ID</label>
                  <input
                    type="email"
                    class="form-control"
                    id="VehicleID"
                    aria-describedby="VehicleID"
                    placeholder="Enter Vehicle ID"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="Reason">Reason</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Reson"
                    placeholder="Reason"
                  ></input>
                  
                </div>
                
                </div>
                
                <br></br>
                <div class="form-group">
                  <button class="btn btn-primary">Add Data</button>
                </div>
              </form>
            </div>
          </header>
          <div className="card-body">
            <div className="table-responsive"></div>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div class="col-sm-3 mb-4"></div>
          <table id="example" class="display">
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Date </th>
                <th>Reason </th>
              </tr>
            </thead>
            <tbody>
              {this.state.tabledata.map((result) => {
                return (
                  <tr class="table-success">
                    <td>
                      {Math.random().toString(36).substring(2, 9).toUpperCase()}{" "}
                      {result.Vehicle}{" "}
                    </td>
                    <td>{result.Date}</td>
                    <td>
                      Speed {result.Speed} kmph near {result.Location}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default OrderMain;
