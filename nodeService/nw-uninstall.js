let Service = require('node-windows').Service;

let svc = new Service({
    name:'NodeService',
    description:'nodeService',
    script:'D:/nodeExpressService/nodeService/app'

});

svc.on('uninstall',function(){
    console.log('Uninstall Complete.');
    console.log('The Service exists:',svc.exists);

});

svc.uninstall();