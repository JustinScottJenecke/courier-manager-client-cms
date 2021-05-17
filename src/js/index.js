
let activeTab = 'dashboardTab';
let authorizedLevel = 0;

/*Specicialized inputs for tab menu functionality*/ 
const tabMenu = document.querySelectorAll('[data-tab-menu]')
const contentTabs = document.querySelectorAll('[data-tab]')

/*Specific input for function, so no arguements are being passed in*/
    function TabFunctionality(){

        tabMenu.forEach(tabButton => {
            tabButton.addEventListener('click', () => {

                const tabButtonDataset = tabButton.dataset.tabMenu

                console.log(tabButton)        
                console.log('You clicked on ' + tabButtonDataset + ' tab')

                //check through contentTabs list to ensure no div has active as class
                contentTabs.forEach(contentTab => {
                    contentTab.classList.remove('activeContentTab')
                })

                //Adding active class to selected tab inside contentTabs list variable
                contentTabs.forEach(contentTab => {

                    if(contentTab.dataset.tab === tabButtonDataset)
                        contentTab.classList.add('activeContentTab')
                })
                
                //remove active class from buttons in tabMenu var
                tabMenu.forEach(btnSelected => {
                    btnSelected.classList.remove('activeTabBtn')
                })
                
                //add active class to clicked btn 
                tabButton.classList.add('activeTabBtn') 

                

            })
        })
    }

TabFunctionality()


/*
    Names for JS files:
    Tabbed content

    dashboardTab
    createDeliveryTab
    manageEmployeesTab
    manageVehiclesTab
    manageDevicesTab
    employeeAdminTab
    humanResourceAdminTab
    reportAdminTab

        
    
        on click functions for componenets inside tabs
                call functions inside js modules when components are clicked
    
*/
