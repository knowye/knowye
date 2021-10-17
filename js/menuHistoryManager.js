/* global storageGet, storageSet, projectMdb1_settings */

var menuHistoryManager = {

    /** @param li  List item with vendor attributes */
    menuHistoryListButton_onClick: function(li) {

        console.log('--- menuHistoryListButton_onClick ' + li.vendor_id);
        storageSet('menuHeading', null);
        if (projectMdb1_settings.vendor_id !== li.vendor_id) {
            //if(projectMdb1_settings.vendor_id)
            //{
            //	var clearOrder = true;
            //}
            projectMdb1_settings.vendor_id = li.vendor_id;
            storageSet('vendorId', li.vendor_id);

            var currentVendor = storageGet('currentVendor') || Apperyio.getModel('vendor');
            //console.log('menuHistory this:', li);
            console.log('menuHistory currentVendor 1:', currentVendor);
            currentVendor.id = li.vendor_id;
            currentVendor.businessName = li.vendor_name;
            currentVendor.taxRate = li.vendor_tax;
            currentVendor.menuTagLine = li.vendor_menuTagLine;
            storageSet('currentVendor', currentVendor);
            console.log('menuHistory currentVendor 2:', currentVendor);

            //if(clearOrder)
            //{
            //	menuHistoryPage_clearOrder_service.execute({});
            //}
            //else
            //{
            Apperyio.navigateTo('menuPage_v2', {
                transition: 'slide'
            });
            //}
        } else {
            Apperyio.navigateTo('menuPage_v2', {
                transition: 'slide'
            });
        }


    }
};