Appery.FileUploadHelper = Appery.createClass(null, {

    init : function(requestOptions) {
        this.__requestOptions = $.extend({}, requestOptions);
    },

    process : function(settings) {
        settings.beforeSend(settings);
        if (this.__requestOptions.echo) {
            settings.success(this.__requestOptions.echo);
        } else {
            uploadPhoto(settings.data.image_uri, settings.data.request_options, settings.data.name, settings);
        }
    }
});


function uploadPhoto (imageURI, reqOptions, name, settings) {
    
        function win(result) {       
            settings.success({'response':JSON.parse(result.response)});            
            settings.complete('success');
        }

        function fail(error) {
            
            settings.error(null, null, error.source);
            settings.complete('error');
            
            alert('An error has occurred: Code = ' + error.code + '\n + Upload error source ' + error.source + '\n Upload error target ' + error.target);
        }
    
        var imageType = imageURI.substr(imageURI.lastIndexOf('.')+1);    
        var options = $.extend(new FileUploadOptions(), reqOptions);

        if(name) {
            options.fileName = name + imageType;
            options.fileKey= name + imageType;
        } else {
            options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.fileKey = imageURI.substr(imageURI.lastIndexOf('/')+1);
        }
    
        options.mimeType=(imageType == 'png')?'image/png':'image/jpeg';           
        var ft = new FileTransfer();
        var addr = encodeURI(projectMdb1_settings.database_url+"/files");
        ft.upload(imageURI, addr, win, fail, options);        
    }


 function isCordovaApp() {
     return (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);
 }

/* Uploads a binary file (base64) using browser API, without Cordova 
 *
 * @param datasource  service to upload to `Files` collection
 * @param imageBase64Data  base64 image data
 * @param name  file name to create in `Files` collection
 * @param type  MIME contents type
 * @param service  service to call in case of success
 */
function uploadBinaryHelper(datasource, imageBase64Data, name, type, service) {

    if (imageBase64Data) {
        var byteCharacters = atob(imageBase64Data.substring(imageBase64Data.indexOf(',')+1));
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i); 
        }
        var byteArray = new Uint8Array(byteNumbers);
        var imageType = type || 'jpeg'; 
        var imageName = name || new Date().getTime();
        imageType = (imageType == 'png')?imageType:'jpeg';        
        var blob = new Blob([byteArray.buffer],{type: 'image/' + imageType});
        var formData = new FormData();        
        formData.append(imageName +'.'+ imageType, blob);
        if(datasource && datasource.service) {
            try {    
                datasource.execute({
                    'allowDataModification': false,
                    'processData': false,
                    'contentType':false,
                    'body': formData,
                    'cache': false,
                    'success': function(data)
                    {
                        if(service)
                        {
                            /* In case of success we are updating `fileInfo` structure in Appery storage
                               `fileName` and `originalFileName` returned by `Files` collection.
                               `fileName` looks like `1ac9456c-c46f-45f2-9b06-d6d549065096.qrCode.jpg`
                               and `originalFileName` looks like `qrCode.jpg`. 
                             */
                            var fileInfo = Apperyio.getModel('fileInfo');
                            fileInfo.fileName = data[0].success.filename;
                            var fn = data[0].success.filename.split('.');
                            fileInfo.originalFileName = fn[fn.length-2] + '.' + fn[fn.length-1];
                            Apperyio.storage.fileInfo.set(fileInfo);
                            service.execute({});
                        }
                    }
				});
        
            } catch (exception){ 
                   console.log(exception.name + ' ' + exception.message); 
                   hideSpinner(); 
            }
        } else {
            console.warn('This data source is not correct.');
        }
    }else{
        console.warn('Image data is empty or has a wrong format.');
    }

}