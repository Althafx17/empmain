import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Viewemployee = () => {
  var [user, setuser] = useState([])
  const [error, seterror] = useState(null);
  axios.get("http://localhost:3001/view")
      .then((response) => {
          console.log(response.data)
          setuser(response.data)
      })
return (
    <div>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Employee name</TableCell>
                <TableCell>Employee Age</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>salary</TableCell>
            </TableRow>
            </TableHead>
            {user.map((val) => {
                      return (
            <TableRow>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.dept}</TableCell>
                <TableCell>{val.sal}</TableCell>
            </TableRow>
                      )  
            })
          }
      </Table>
    </div>
  )
}

export default Viewemployee
