var menuHeadingManager = {

    setItemToMove: function(item) {
        this.itemToMove = item;
    },

    setTargetItem: function(item) {
        this.targetItem = item;
    },

    resetItemToMove: function() {
        this.itemToMove = null;
        this.targetItem = null;
    },

    /* Right Swipe opens Mark or Reorder */
    swipeRight: function(em) {
        if (!this.itemToMove || this.itemToMove === em) {
            this.itemToMove = em;
            this.isItem = $(em).attr('is_item') === 'true';
            if (this.isItem) {
                Apperyio("moveFrom_label").html('Mark this item to be moved?');
            } else {
                Apperyio("moveFrom_label").html('Mark this heading to be moved?');
            }
            Apperyio("moveFrom_popup").popup("open", {
                transition: "none"
            });
        } else {
            this.targetItem = em;
            var oldParent = $(this.itemToMove).attr('parent_id');
            this.parentId = $(this.targetItem).attr('parent_id');
            if (this.parentId !== oldParent) {
                console.log('Can reorder only for the same parent');
                return;
            }
            if (this.isItem) {
                Apperyio("moveToOrder_label").html('Move item here?');
            } else {
                Apperyio("moveToOrder_label").html('Move heading here?');
            }
            Apperyio("moveToOrder_popup").popup("open", {
                transition: "none"
            });
        }
    },

    /* Left Swipe opens Move as Child */
    swipeLeft: function(em) {
        if (!this.itemToMove) {
            console.log('No itemToMove');
            return;
        }
        if ($(em).attr('is_item') === 'true') {
            console.log('Can Move as Child only for headings');
            return;
        }
        this.targetItem = em;
        var oldParent = $(this.itemToMove).attr('parent_id');
        this.parentId = $(this.targetItem).attr('item_id');
        if (this.parentId === oldParent) {
            console.log('Cannot move to the same parent');
            return;
        }
        Apperyio("moveToChild_popup").popup("open", {
            transition: "none"
        });
    },

    moveToChild: function() {
        menuHeading_updateParent_service.execute({
            parameters: {
                isItem: this.isItem,
                id: $(this.itemToMove).attr('item_id'),
                parent: this.parentId
            }
        });
        this.resetItemToMove();
    },

    moveBefore: function() {
        this.updateOrder(true);
    },

    moveAfter: function() {
        this.updateOrder(false);
    },

    updateOrder: function(before) {
        console.log('--- updateOrder');
        var em_1 = $(this.itemToMove);
        var em_2 = $(this.targetItem);
        var id_1 = em_1.attr('item_id');
        var id_2 = em_2.attr('item_id');
        var tm_1 = em_1.attr('is_item') === 'true';
        var tm_2 = em_2.attr('is_item') === 'true';
        var list = getChildren({ id:this.parentId });
        var result = [];
        for (var i=0; i<list.length; i++) {
            var itm = list[i];
            if (itm.id!==id_1) {
                if (itm.id!==id_2) {
                    result.push({ id:itm.id, isItem:itm.isItem });
                } else
                if (before) {
                    result.push({ id:id_1, isItem:tm_1 });
                    result.push({ id:id_2, isItem:tm_2 });
                } else {
                    result.push({ id:id_2, isItem:tm_2 });
                    result.push({ id:id_1, isItem:tm_1 });
                }
            }
        }
        console.log('result:',result);
        storageSet('arrayOfObjects', result);
        menuHeading_updateOrder_service.execute({});
        this.resetItemToMove();
    }

};