import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Dashboard = () => {
  // const [user, setUser] = useState([]);
  const [activeTime, setActiveTime] = useState('');
  const [activeDate,setActiveDate] = useState('');
  const [booleanValue,setBooleanValue]= useState(true)
  const [id,setId]= useState('')
  

  
  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((response) => response.json())
  //     .then((json) => setUser(json));
  // }, []);

  const { data: user = [], isLoading, refetch } = useQuery({
    queryKey: ["instructorData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });
 
 console.log(user)
     const information = {
      timeStatus:activeTime,
      dateStatus:activeDate,
      timeManagment:booleanValue,
      id
    }

    console.log(information)

    const myData = ()=>{
        setBooleanValue(!booleanValue)
        const todaysTime = new Date().toLocaleTimeString()
        setActiveTime(todaysTime)
        const todaysDate = new Date().toLocaleDateString()
        setActiveDate(todaysDate)
    }
  

  fetch("http://localhost:5000/users", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(information),
  })
    .then((res) => res.json())
    .then((data) => {
      refetch()
    });

  return (
   
    <Container>
      <Row>
        <Col md={10} className="mx-auto">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Busy Time</th>
                <th>Active Time</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item.useUrl}
                      alt=""
                    />
                  </td>
                  <td>{item.mobile}</td>
                  <td>{item.Address}</td>
                  <td onClick={()=>setId(item._id)}>
                    <button
                      onClick={()=>myData()}
                      className="btn btn-primary"
                    >
                      Busy
                    </button>
                    
                  </td>
                  <td onClick={()=>setId(item._id)}>
                    <button
                    onClick={()=>myData()}
                      className="btn btn-primary"
                    >
                      Active
                    </button>
                  </td>
                  <td  >
                    <button className="btn btn-success">{item.timeStatus} | {item.dateStatus}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
