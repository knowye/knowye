/* global isGuest, storageSet, xorKey */

var navigatePageManager = {

    menuHistoryButton_onClick: function(event) {
        if (isGuest) {
            Apperyio('loginGotoPopup').popup('open');
        } else {
            Apperyio.navigateTo('menuHistoryPage', {
                transition: 'slide'
            });
        }
    },
    
    navigatePage_logout_service_onSuccess: function(data) {
        storageSet("logout", "true");
        xorKey.remove();
        setTimeout(function() {
            if (isGuest) {
                Apperyio.navigateTo('startScreen', {
                    transition: 'slidedown' /*, reloadPage: true*/ ,
                    changeHash: true
                });
            } else {
                Apperyio.navigateTo('logoutPage', {
                    transition: 'slidedown'
                });
            }
        }, 500);
    }

};