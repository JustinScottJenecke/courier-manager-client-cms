
    const employeeTable = document.querySelector('#employeeTable')
    const employeeTableBody = document.querySelector('#employeeTable #employeeTableBody')

    console.log(employeeTable.tagName)

    let objects = [
        { deliveryId: 0875, driverId: "J200", driverName: "Justin Jenecke", vehicleId: 40036, route: "north" },
        { deliveryId: 4540, driverId: "m874", driverName: "Jin Kazama", vehicleId: 40036, route: "north" },
        { deliveryId: 0565, driverId: "J2k0", driverName: "Asuka Bustin", vehicleId: 44856, route: "north" },
        { deliveryId: 8845, driverId: "jnjl", driverName: "Bob Scott", vehicleId: 40036, route: "south" }
    ]

    function populateTable(dataArray, table) {

        dataArray.forEach(data => {

            let row  = `<tr>
                            <td>${data.deliveryId}</td>
                            <td>${data.driverId}</td>
                            <td>${data.driverName}</td>
                            <td>${data.vehicleId}</td>
                            <td>${data.route}</td>               
                        </tr>`

            table.innerHTML += row

        })
    }

    //const functionButton = document.querySelector('#functionButton')
       
   /* functionButton.addEventListener('click', () => {
        populateTable(objects, employeeTableBody)
    })*/
    

