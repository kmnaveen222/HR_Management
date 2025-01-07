
import { Navbar } from "./Navbar";
import "./css/Employee_details.css";

export const Employee_details = () => {
  return (
    <>
      <div className="emp-container">
        <div className="emp-navbar">
          <Navbar />
        </div>
        <div className="emp-detail">
        <div className="emp-title">Employee Details</div>
          <table>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Naveen</td>
              <td>naveen@gamil.com</td>
              <td>abc</td>
              <td>7200434524</td>
              <td>01-07-2024</td>
              <td>software developer</td>
              <td><button>edit</button><button>delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Neufer</td>
              <td>Neufer@gamil.com</td>
              <td>abc</td>
              <td>7200434524</td>
              <td>01-07-2024</td>
              <td>software developer</td>
              <td><button>edit</button><button>delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Neufer</td>
              <td>Neufer@gamil.com</td>
              <td>abc</td>
              <td>7200434524</td>
              <td>01-07-2024</td>
              <td>software developer</td>
              <td><button>edit</button><button>delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Neufer</td>
              <td>Neufer@gamil.com</td>
              <td>abc</td>
              <td>7200434524</td>
              <td>01-07-2024</td>
              <td>software developer</td>
              <td><button>edit</button><button>delete</button></td>
            </tr>
          </table>

        </div>
      </div>
    </>
  );
};
