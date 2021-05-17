
const deviceTable = document.querySelector('#deviceTableBody')

    
    function deviceRequest() {

        const request = new XMLHttpRequest()

        request.open('get','http://localhost:9090/api.couriermanager/device/all')

        request.onload = () => {
            const data = JSON.parse(request.response)

            populateDeviceTable(data, deviceTable)
            
        }
        request.send()

    }

    function populateDeviceTable (array, tableBody){         

        array.forEach(data => {
    
            let row  = `<tr>
                            <td>${data.deviceID}</td>
                            <td>${data.model}</td>
                            <td>${data.manufacturer}</td>
                            <td>${data.value}</td>
                            <td>${data.depreciatedValue}</td>                
                        </tr>`
    
            tableBody.innerHTML += row
    
        })
    }  


activate.addEventListener('click', () => {deviceRequest()})

function animateTabMenu(){

    const tabMenu = document.querySelectorAll('[data-for-tab]')

    tabMenu.forEach(tabButton => {
        tabButton.addEventListener('click', () =>{

            
            const target = tabButton.dataset.forTab
            if (target == 'manageDevices'){
                console.log('target matches id')   
            }  else {
                console.log('error')
            }
            
        })
    })
}

animateTabMenu()

/*if (activate.classList.contains('activeContentTab'))
    console.log('active')*/




