import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const List = ({data}) => {
 
    


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="Table description" data={data}>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" sx={{with:'15px'}}>Tracking ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
         {data.some(row => row.company) &&   <TableCell className="tableCell" >Company</TableCell>}
         { data.some(row => row.requirements) &&  <TableCell className="tableCell">Requirements</TableCell>}
         { data.some(row => row.CV)  && <TableCell className="tableCell">CV</TableCell>}
           { data.some(row => row.query) && <TableCell className="tableCell">Query</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phone ?row.phone : row.contactNo }</TableCell>
             {row.company && <TableCell className="tableCell">{row.company}</TableCell>}
             {row.requirements && <TableCell className="tableCell">{row.requirements}</TableCell>}
             {row.CV && <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{<Link to={row.CV} target="_blank">download CV</Link>}</span>
              </TableCell>}
             { row.query && <TableCell className="tableCell">{row.query}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;