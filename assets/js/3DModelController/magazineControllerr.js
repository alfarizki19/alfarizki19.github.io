if (mainBody=0)
{
    api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("CubeA TerHide")
          const lid = Object.values(nodes).find((node) => node.name === "M4_mainbody");
          api.hide(lid.instanceID);
        }
      });
}