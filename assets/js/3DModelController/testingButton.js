const success = (api) => {
    api.start();
    console.log("Started");
    
    //Hide Cube Magazine v1
    document.getElementById('hideTestButton').addEventListener('click', function() 
    {
      api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("CubeA TerHide")
            const lid = Object.values(nodes).find((node) => node.name === "M4_magazine_V1");
            api.hide(lid.instanceID);
          }
        });
    });

  var iframe = document.getElementById( 'sketchfab-frame' );
  var version = '1.12.1';
  var uid = 'cc44b4b43cc442fa96e1e8fa4ac64399';

  var client = new Sketchfab( version, iframe );  
  
  client.init( uid, {
  success: success,
  error: function onError() {
      console.log( 'Viewer error' );
  }
} );
}