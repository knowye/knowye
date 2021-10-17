var menuHeadingManagePageBuilder = {

    /* Add heading on Taphold */
    itemTaphold: function(elem) {

        if (customerMode) {
            return false;
        }

        if (draggingInProcess) {
            return false;
        }

        editMode = true;
        var item_id = $(elem).attr('item_id');
        storageSet('selectedItem', item_id);
        console.log('=== item taphold:', item_id);
        var currentItem = getItemFromHierarchy(item_id);
        storageSet('currentItem', currentItem);

        if (!currentItem.isItem) {
            //mapMenuHedingItemService.execute({});
            //Apperyio("headingParentSelect").val(hierarchyList[0].id).refresh();
            
            makeHierarchy(false, item_id);
            Apperyio('deleteButton').show();
            
            Apperyio('headingAddField').val(currentItem.heading);
            Apperyio('headingDescriptionField').val(currentItem.description);
            menuHeading_updateHeadingParentSelect_service.execute();
            
            Apperyio("headingAddPopup").popup("open");
        }
    },

};