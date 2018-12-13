let Service = require('node-windows').Service;
let svc = new Service({
    name:'NodeService',
    description:'nodeService',
    script:'D:/nodeExpressService/nodeService/app'

});

svc.on('install',()=>{
    svc.start();
    console.log('Install Complete.');
    console.log('The Service exists:',svc.exists);
});

svc.install();

