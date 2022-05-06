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
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },
        {
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },
        {
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },
        {
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        },{
          vehicleid: "AYXGHJH",
          date: "2021-09-20",
          reason :"XYZ Reason"
        }

      ],
    };
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
          <h2 className="content-title">Details</h2>
        </div>

        <div className="card mb-4 shadow-sm">
          <header className="card-header bg-white">
            <div className="row gx-3 py-3">
              <div className="col-lg-4 col-md-6 me-auto">
                <input
                  type="text"
                  placeholder="Vehicle ID"
                  className="form-control p-2"
                />
              </div>
              <div className="col-lg-4 col-md-8 me-auto ">
                <button>Add Vehicle</button>
              </div>

            </div>
          </header>
          <div className="card-body">
            <div className="table-responsive"></div>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div class="col-sm-3 mb-4">
            <div class="form-group">
              <label for="sel1" class="form-label">
                Date Filter:
              </label>
              <input
                class="form-control"
                type="date"
                class="dateadded form-control"
              />
            </div>
          </div>
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
                    <td>{result.vehicleid}</td>
                    <td>{result.date}</td>
                    <td>{result.reason}</td>

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
