(function(context) {
    Helper = {};

    // Reference to Facebook window
    var ref;
        
    // The page that we should navigate to after the successful login
    var homePage = 'navigatePage';
    
    Helper.init = function() {
        var facebook_app_id = projectMdb1_settings.facebook_app_id;
        var db_id = projectMdb1_settings.database_id;
        //var callbackUrl = this.replacePage(window.location.href, homePage + ".html");
        var callbackUrl = "http://appery.io/app/view/" + projectMdb1_settings.project_id + "/app/" + homePage + ".html";
        sessionStorage.setItem('facebook_app_id', facebook_app_id);
        sessionStorage.setItem('db_id', db_id);
        sessionStorage.setItem('callbackUrl', callbackUrl);

        /*
        var url = "https://www.facebook.com/dialog/oauth?client_id=" + facebook_app_id + "&redirect_uri=" + callbackUrl + "&scope=&response_type=token";
        
        if (this.isPhoneGapApp()) {
            ref = window.open(url, '_blank', 'location=yes');
            ref.addEventListener("loadstart", this.getFacebookAccessToken);
        } else {
            window.open(url, "_self");
        }
        */
        Helper.getApperySessionToken();
    };
    
    Helper.getFacebookAccessToken = function(event) {
        if (event.url.indexOf('access_token') >= 0) {
            var params = event.url.split("access_token=");
            var _access_token = params[1].slice(0, params[1].indexOf("&"));
            sessionStorage.setItem('fb_access_token', _access_token);
            ref.close();
            Helper.getApperySessionToken();
        }
    };
    
    Helper.isPhoneGapApp = function() {
        return (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
    };
    
    Helper.replacePage = function(url, page) {
        var k = url.lastIndexOf('/');
        return url.substring(0,k+1) + page;
    };
    
    /* Get Appery DB session token.
       We've opened another window wher running in browser, so we are getting the necessary data from sessionStorage
     */
    Helper.getApperySessionToken = function() {
        isFacebook = true;
        var facebook_app_id = sessionStorage.getItem('facebook_app_id');
        var callbackUrl = sessionStorage.getItem('callbackUrl');
        
        Apperyio.User.setDefaultDB(get_db_id());
        Apperyio.User.loginFB(facebook_app_id, callbackUrl, get_db_id()).then(function(sessionToken) {
            Helper.apperySessionTokenReceived(sessionToken);    
        }, function(error) {
            alertMsg('Error', 'Facebook Login Error');
        });
        /*
        if (!Helper.isPhoneGapApp()) {
            // loginFB promise is not fired in browser 
            setTimeout(waitForApperySessionToken, 500);
        }
        */
    };

    Helper.apperySessionTokenReceived = function(sessionToken) {
        storageSet('sessionToken', sessionToken);
        var userId = Apperyio.User.getUserId(get_db_id());
        var facebookToken = Apperyio.User.getFacebookToken();

        storageSet('userId', userId);
        storageSet('userType', 'customer');
        storageSet('fb_access_token', facebookToken);
        storageSet('currentVendor', '');
        storageSet('currentOrder', Apperyio.getModel('currentOrder'));
        facebook_userDetails_service.execute();
        //storageGet('userName');
        //Appery.navigateTo(homePage, {});
    };
    
    if (window.location.href.indexOf("access_token") != -1) {
        var hashFromFb = window.location.hash;
        window.location.hash = '';
        var paramsFromFb = hashFromFb.substring(1).split("&");
        var access_token = paramsFromFb[0].split("=")[1];
        // `storageSet` is not yet available
        sessionStorage.setItem('fb_access_token', access_token);
        Helper.getApperySessionToken();
    }
    
    context.Helper = Helper;
})(window);


var isFacebook = false;


function get_db_id() {
    return sessionStorage.getItem('db_id');
}

//var apperySessionTokenCount = 0;

function waitForApperySessionToken() {
    //apperySessionTokenCount++;
    //sessionStorage.setItem('apperySessionTokenCount', apperySessionTokenCount);
    var sessionToken = Apperyio.User.getToken(sessionStorage.getItem('db_id'));
    if (sessionToken) {
        Helper.apperySessionTokenReceived(sessionToken);
    } else {
        //console.log('waitForApperySessionToken');
        setTimeout(waitForApperySessionToken, 500);
    }
}
