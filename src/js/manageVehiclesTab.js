const activate = document.querySelector('#manageDevices')
const deviceTable = document.querySelector('#deviceTableBody')
    
    function populateDeviceTable() {

        const request = new XMLHttpRequest()

        request.open('get','http://localhost:9090/api.couriermanager/device/all')

        request.onload = () => {
            const data = JSON.parse(request.response)
            /*data.forEach(dataElement => {
                console.log(dataElement)
            })*/
            data.forEach(datas => {
    
                let row  = `<tr>
                                <td>${datas.deviceID}</td>
                                <td>${datas.model}</td>
                                <td>${datas.manufacturer}</td>
                                <td>${datas.value}</td>
                                <td>${datas.depreciatedValue}</td>                
                            </tr>`
        
                deviceTable.innerHTML += row
        
            })
            
        }
        request.send()

         
        /*data.forEach(data => {
    
            let row  = `<tr>
                            <td>${data.deviceID}</td>
                            <td>${data.model}</td>
                            <td>${data.manufacturer}</td>
                            <td>${data.value}</td>
                            <td>${data.depreciatedValue}</td>                
                        </tr>`
    
            deviceTable.innerHTML += row
    
        })**/
    
    }

activate.addEventListener('click', () => {populateDeviceTable()})