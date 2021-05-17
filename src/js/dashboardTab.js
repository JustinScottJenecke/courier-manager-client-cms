
    const activeDeliveryTable = document.querySelector('#activeDeliveryTable')
    const adTableBody = document.querySelector('#activeDeliveryTable #adTableBody')

    console.log(activeDeliveryTable.tagName)

    let objects = [
        { deliveryId: 0875, driverId: "J200", driverName: "Justin Jenecke", vehicleId: 40036, route: "north" },
        { deliveryId: 4540, driverId: "m874", driverName: "Rin Bama", vehicleId: 40036, route: "north" },
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
                            <td><input type="number" name="distance"></td>
                            <td><button class="confirmBtn">Confirm</button></td>                  
                        </tr>`

            table.innerHTML += row

        })
    }

    populateTable(objects, activeDeliveryTable)
