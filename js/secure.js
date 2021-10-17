var ajaxCall = $.ajax;
$.ajax = function(data) {
    if (data.dataType != 'json') {
        ajaxCall(data);
        return;   
    }
    var njkasehgqw_1 = {} 
    if (data.data) njkasehgqw_1 = data.data;
    
    var body = {
        kbknkjansd: btoa_utf8(data.type),
        iniasndiug: btoa_utf8(data.url),
        jnjknsdqwerm: btoa_utf8(JSON.stringify(data.headers)),
        njkasehgqw: btoa_utf8(JSON.stringify(njkasehgqw_1))
    };
    
    data.url = "https://api.appery.io/rest/1/code/api-gateway/exec";
    // data.url = "https://knowye-api-gateway.herokuapp.com/api/_q";
    
    data.type = "post";
    data.data = JSON.stringify(body);
    data.headers = {};
    data.type = 'post';
    data.dataType = 'text';
    data.contentType = 'application/json';
    
    var cbSuccess = data.success;
    data.success = function (response) {
        
        if (response == "") response = "{}";
        try {
            cbSuccess(JSON.parse(atob_utf8(response)));
        } catch (e) {
            try {
                cbSuccess(JSON.parse(response));
            } catch (e) {
                try {
                    cbSuccess(response);
                } catch (e) {
                    console.log(e)
                    // cbSuccess(response);
                }
            }   
        }
    }
    
    
    var cbFailed = data.error;
    data.error = function (xhr, status, throwE) {
        try {
            xhr.responseJSON = JSON.parse(atob_utf8(xhr.responseText));
            cbFailed(xhr, status, throwE);
        } catch (e) {
            xhr.responseJSON = xhr.responseJSON;
            cbFailed(xhr, status, throwE);
           
        }
    }
    
    
    ajaxCall(data);
}
