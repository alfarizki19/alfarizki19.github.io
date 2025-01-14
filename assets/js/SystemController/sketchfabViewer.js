var iframe = document.getElementById('sketchfab-iframe');
var uid = 'cc44b4b43cc442fa96e1e8fa4ac64399';

// Inisialisasi Sketchfab viewer dengan iframe
var client = new Sketchfab(iframe);

var ownSketchfabAPI;

// Alternatif, jika ingin meminta versi tertentu
// var client = new Sketchfab('1.12.1', iframe);

client.init(uid, {
  success: function onSuccess(api) {
    api.start(function(){});
    api.addEventListener('viewerready', function() {
      // API siap digunakan
      console.log('Viewer is ready');

      /* <===== Hide Component Diawal =====>  */

      //Hide Main Body
      //hide M4_mainbody diawal mulai
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_mainBody Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_mainBody" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //hide M4_mainbodydesertcomplete diawal mulai
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_mainbody_desertcomplete Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody_desertcomplete');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_mainbody_desertcomplete" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Stock
      //stock
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_stock Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_stock" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //stockDesert
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_stockDesert Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_stockDesert" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Muzzle Attachment
      //muzzle
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_muzzleAttacment_muzzle Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_muzzle');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_muzzleAttacment_muzzle" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //silincer
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_muzzleAttacment_silincer Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_silincer');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_muzzleAttacment_silincer" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Magazine
      //M4_magazine_magpulBlack
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulBlack Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulBlack');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulBlack" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //M4_magazine_magpulFDE
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulFDE Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulFDE');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulFDE" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //M4_magazine_V1
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_V1 Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_V1');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_V1" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Sight
      //M4_sight
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_sight Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_sight');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_sight" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Optic Sight
      //M4_opticsight
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_opticsight Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_opticsight');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_opticsight" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Rail System
      //M4_railsystemA
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_railsystemA Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemA');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_railsystemA" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //M4_railsystemB
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_railsystemB Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemB');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_railsystemB" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Hide Vertical Grip
      //M4_verticalGrip
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_verticalGrip Hide Initial");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_verticalGrip');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_railsystemB" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      /* <===== Hide Component Diawal =====>  */

      /* <===== Screenshoot Function =====> */
      document.getElementById('screenShootButton').addEventListener('click', function() {
        // Memastikan API Sketchfab sudah tersedia
        if (api) {
          // Mengambil screenshot dari viewer Sketchfab
          api.getScreenShot('image/png', function(err, result) {
            if (!err) {
              // Membuat elemen <a> untuk mendownload gambar
              var link = document.createElement('a');
              link.href = result; // URL hasil screenshot (Base64 encoded)
              link.download = 'My M4 Configuration Screenshoot.png'; // Nama file yang akan didownload
              link.click(); // Memicu unduhan
            } else {
              console.error('Error capturing screenshot', err);
            }
          });
        } else {
          console.error('Sketchfab API not ready');
        }
      });
      /* <===== Screenshoot Function =====> */

      /* <===== MainBody Function =====> */
      //mainBodyV1Button
      document.getElementById('mainBodyV1Button').addEventListener("click", function() {
        //mainBody Show Hide System <
        if(mainBodyOption == 1)
        {
          api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_mainBody dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_mainBody" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });
        }
        else if(mainBodyOption != 1)
        {
          api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_mainBody tidak dipilih");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.hide(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_mainBody" not found');
              }
            } else {
              console.error('Error retrieving node map', err);
            }
          });
        }
        //mainBody Show Hide System >

        //mainBodyDesertComplete Show Hide System <
        if(mainBodyOption == 2)
          {
            api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_mainbody_desertcomplete dipilih");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody_desertcomplete');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.show(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_mainbody_desertcomplete" not found');
              }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
          });
        }
        else if(mainBodyOption != 2)
          {
            api.getNodeMap(function(err, nodes) {
              if (!err) {
                console.log("M4_mainbody_desertcomplete Hiding");
                const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody_desertcomplete');
          
                // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                if (lid) {
                  api.hide(lid.instanceID); // Menyembunyikan objek
                } else {
                  console.error('Node with name "M4_mainbody_desertcomplete" not found');
                }
              } else {
                console.error('Error retrieving node map', err);
              }
            });
        }
        //mainBodyDesertComplete Show Hide System <

        /* <===== stockPack show Hide System =====> */
        if (mainBodyOption == 1)
          {
              //jika memilih M4_stock
              if (stockOption == 1)
              {
                  api.getNodeMap(function(err, nodes) {
                      if (!err) {
                        console.log("M4_stock Hide Initial");
                        const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                  
                        // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                        if (lid) {
                          api.show(lid.instanceID); // Menyembunyikan objek
                        } else {
                          console.error('Node with name "M4_stock" not found');
                        }
                      } 
                      else
                      {
                        console.error('Error retrieving node map', err);
                      }
                    });
              }
              //jika tidak memilih M4_stock
              else if (stockOption != 1)
                  {
                      api.getNodeMap(function(err, nodes) {
                          if (!err) {
                            console.log("M4_stock Hide Initial");
                            const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                      
                            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                            if (lid) {
                              api.hide(lid.instanceID); // Menyembunyikan objek
                            } else {
                              console.error('Node with name "M4_stock" not found');
                            }
                          } 
                          else
                          {
                            console.error('Error retrieving node map', err);
                          }
                        });
              } 

              //jika memilih M4_stockdesert
              if (stockOption == 2)
                {
                    api.getNodeMap(function(err, nodes) {
                        if (!err) {
                          console.log("M4_stockDesert choose");
                          const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
                    
                          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                          if (lid) {
                            api.show(lid.instanceID); // Menyembunyikan objek
                          } else {
                            console.error('Node with name "M4_stockDesert " not found');
                          }
                        } 
                        else
                        {
                          console.error('Error retrieving node map', err);
                        }
                      });
                }
                //jika tidak memilih M4_stock
                else if (stockOption != 2)
                    {
                        api.getNodeMap(function(err, nodes) {
                            if (!err) {
                              console.log("M4_stockDesert bataldipilih");
                              const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
                        
                              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                              if (lid) {
                                api.hide(lid.instanceID); // Menyembunyikan objek
                              } else {
                                console.error('Node with name "M4_stockDesert " not found');
                              }
                            } 
                            else
                            {
                              console.error('Error retrieving node map', err);
                            }
                          });
                }   
          }
        
        //jika pelanggan tidak memilih M4_mainBody
        else if (mainBodyOption != 1)
        {
          stockOption = 0;

          //jika memilih M4_stock
          if (stockOption == 1)
            {
                api.getNodeMap(function(err, nodes) {
                    if (!err) {
                      console.log("M4_stock Hide Initial");
                      const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                
                      // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                      if (lid) {
                        api.show(lid.instanceID); // Menyembunyikan objek
                      } else {
                        console.error('Node with name "M4_stock" not found');
                      }
                    } 
                    else
                    {
                      console.error('Error retrieving node map', err);
                    }
                  });
            }
            //jika tidak memilih M4_stock
            else if (stockOption != 1)
                {
                    api.getNodeMap(function(err, nodes) {
                        if (!err) {
                          console.log("M4_stock Hide Initial");
                          const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                    
                          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                          if (lid) {
                            api.hide(lid.instanceID); // Menyembunyikan objek
                          } else {
                            console.error('Node with name "M4_stock" not found');
                          }
                        } 
                        else
                        {
                          console.error('Error retrieving node map', err);
                        }
                      });
            } 

            //jika memilih M4_stockdesert
            if (stockOption == 2)
              {
                  api.getNodeMap(function(err, nodes) {
                      if (!err) {
                        console.log("M4_stockdesert choose");
                        const lid = Object.values(nodes).find((node) => node.name === 'M4_stockdesert');
                  
                        // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                        if (lid) {
                          api.show(lid.instanceID); // Menyembunyikan objek
                        } else {
                          console.error('Node with name "M4_stock" not found');
                        }
                      } 
                      else
                      {
                        console.error('Error retrieving node map', err);
                      }
                    });
              }
              //jika tidak memilih M4_stock
              else if (stockOption != 2)
                  {
                      api.getNodeMap(function(err, nodes) {
                          if (!err) {
                            console.log("M4_stockdesert bataldipilih");
                            const lid = Object.values(nodes).find((node) => node.name === 'M4_stockdesert');
                      
                            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                            if (lid) {
                              api.hide(lid.instanceID); // Menyembunyikan objek
                            } else {
                              console.error('Node with name "M4_stockdesert" not found');
                            }
                          } 
                          else
                          {
                            console.error('Error retrieving node map', err);
                          }
                        });
              }   

        }
        /* <===== stockPack show Hide System =====> */



      });

      //mainBodyDesertCompleteButton
      document.getElementById('mainBodyDesertCompleteButton').addEventListener("click", function() {
        /* <===== mainBodyDesertComplete Show Hide System =====> */
        if(mainBodyOption == 1)
          {
            api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_mainBody Hiding");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.show(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_mainBody" not found');
              }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
          });
        }
        else if(mainBodyOption != 1)
          {
            api.getNodeMap(function(err, nodes) {
              if (!err) {
                console.log("M4_mainBody Hiding");
                const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody');
          
                // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                if (lid) {
                  api.hide(lid.instanceID); // Menyembunyikan objek
                } else {
                  console.error('Node with name "M4_mainBody" not found');
                }
              } else {
                console.error('Error retrieving node map', err);
              }
            });
        }
          //mainBody Show Hide System >

        //mainBodyDesertComplete Show Hide System <
        if(mainBodyOption == 2)
          {
            api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_mainbody_desertcomplete Hiding");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody_desertcomplete');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.show(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_mainbody_desertcomplete" not found');
              }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
          });
        }
        else if(mainBodyOption != 2)
          {
            api.getNodeMap(function(err, nodes) {
              if (!err) {
                console.log("M4_mainbody_desertcomplete Hiding");
                const lid = Object.values(nodes).find((node) => node.name === 'M4_mainbody_desertcomplete');
          
                // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                if (lid) {
                  api.hide(lid.instanceID); // Menyembunyikan objek
                } else {
                  console.error('Node with name "M4_mainbody_desertcomplete" not found');
                }
              } else {
                console.error('Error retrieving node map', err);
              }
            });
        }
        /* <===== mainBodyDesertComplete Show Hide System =====> */

        //M4_stock Hide
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_stock tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_stock" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });

        //M4_stockDesert hide
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_stockDesert tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_stockDesert" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

        /* ===== */

        /* <===== stockPack show Hide System =====> */
        if (mainBodyOption == 1)
          {
              //jika memilih M4_stock
              if (stockOption == 1)
              {
                  api.getNodeMap(function(err, nodes) {
                      if (!err) {
                        console.log("M4_stock Hide Initial");
                        const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                  
                        // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                        if (lid) {
                          api.show(lid.instanceID); // Menyembunyikan objek
                        } else {
                          console.error('Node with name "M4_stock" not found');
                        }
                      } 
                      else
                      {
                        console.error('Error retrieving node map', err);
                      }
                    });
              }
              //jika tidak memilih M4_stock
              else if (stockOption != 1)
                  {
                      api.getNodeMap(function(err, nodes) {
                          if (!err) {
                            console.log("M4_stock Hide Initial");
                            const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                      
                            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                            if (lid) {
                              api.hide(lid.instanceID); // Menyembunyikan objek
                            } else {
                              console.error('Node with name "M4_stock" not found');
                            }
                          } 
                          else
                          {
                            console.error('Error retrieving node map', err);
                          }
                        });
              } 

              //jika memilih M4_stockdesert
              if (stockOption == 2)
                {
                    api.getNodeMap(function(err, nodes) {
                        if (!err) {
                          console.log("M4_stockdesert choose");
                          const lid = Object.values(nodes).find((node) => node.name === 'M4_stockdesert');
                    
                          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                          if (lid) {
                            api.show(lid.instanceID); // Menyembunyikan objek
                          } else {
                            console.error('Node with name "M4_stock" not found');
                          }
                        } 
                        else
                        {
                          console.error('Error retrieving node map', err);
                        }
                      });
                }
                //jika tidak memilih M4_stock
                else if (stockOption != 2)
                    {
                        api.getNodeMap(function(err, nodes) {
                            if (!err) {
                              console.log("M4_stockdesert bataldipilih");
                              const lid = Object.values(nodes).find((node) => node.name === 'M4_stockdesert');
                        
                              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                              if (lid) {
                                api.hide(lid.instanceID); // Menyembunyikan objek
                              } else {
                                console.error('Node with name "M4_stockdesert" not found');
                              }
                            } 
                            else
                            {
                              console.error('Error retrieving node map', err);
                            }
                          });
                }   
          }
        
        //jika pelanggan tidak memilih M4_mainBody
        else if (mainBodyOption != 1)
        {
          stockOption = 0;

          //jika memilih M4_stock
          if (stockOption == 1)
            {
                api.getNodeMap(function(err, nodes) {
                    if (!err) {
                      console.log("M4_stock Hide Initial");
                      const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                
                      // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                      if (lid) {
                        api.show(lid.instanceID); // Menyembunyikan objek
                      } else {
                        console.error('Node with name "M4_stock" not found');
                      }
                    } 
                    else
                    {
                      console.error('Error retrieving node map', err);
                    }
                  });
            }
            //jika tidak memilih M4_stock
            else if (stockOption != 1)
                {
                    api.getNodeMap(function(err, nodes) {
                        if (!err) {
                          console.log("M4_stock Hide Initial");
                          const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
                    
                          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                          if (lid) {
                            api.hide(lid.instanceID); // Menyembunyikan objek
                          } else {
                            console.error('Node with name "M4_stock" not found');
                          }
                        } 
                        else
                        {
                          console.error('Error retrieving node map', err);
                        }
                      });
            } 

            //jika memilih M4_stockdesert
            if (stockOption == 2)
              {
                  api.getNodeMap(function(err, nodes) {
                      if (!err) {
                        console.log("M4_stockdesert choose");
                        const lid = Object.values(nodes).find((node) => node.name === 'M4_stockdesert');
                  
                        // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                        if (lid) {
                          api.show(lid.instanceID); // Menyembunyikan objek
                        } else {
                          console.error('Node with name "M4_stock" not found');
                        }
                      } 
                      else
                      {
                        console.error('Error retrieving node map', err);
                      }
                    });
              }
              //jika tidak memilih M4_stock
              else if (stockOption != 2)
                  {
                      api.getNodeMap(function(err, nodes) {
                          if (!err) {
                            console.log("M4_stockDesert bataldipilih");
                            const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
                      
                            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
                            if (lid) {
                              api.hide(lid.instanceID); // Menyembunyikan objek
                            } else {
                              console.error('Node with name "M4_stockDesert" not found');
                            }
                          } 
                          else
                          {
                            console.error('Error retrieving node map', err);
                          }
                        });
              }   

        }
        /* <===== stockPack show Hide System =====> */
      });

    
      /* <===== Stock Function =====> */
      //M4_stock_Button
      document.getElementById('M4_stock_Button').addEventListener("click", function() {
      /* <===== Stock Show Hide System =====> */
      //M4_stock Show
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_stock dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.show(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_stock" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //M4_stockDesert hide
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_stockDesert tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_stockDesert" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

        /* <===== Stock Show Hide System =====> */
        
      });

      //M4_stockDesert_Button
      document.getElementById('M4_stockDesert_Button').addEventListener("click", function() {
        /* <===== Stock Show Hide System =====> */
        //M4_stock Hide
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_stock tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_stock');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_stock" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });
          
        //M4_stockDesert Show
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_stockDesert dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_stockDesert');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_stockDesert" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });

        /* <===== Stock Show Hide System =====> */
        
      });

      /* <===== Stock Function =====> */


      /* <===== Muzzle Attachment =====> */
      //M4_muzzleAttacment_muzzle
      document.getElementById('M4_muzzleAttacment_muzzleButton').addEventListener("click", function() {
      //muzzle Show
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_muzzleAttacment_muzzle dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_muzzle');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.show(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_muzzleAttacment_muzzle" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //Silincer Hide
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_muzzleAttacment_silincer tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_silincer');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_muzzleAttacment_silincer" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });
      });

      //M4_muzzleAttacment_silincer
      document.getElementById('M4_muzzleAttacment_silincerButton').addEventListener("click", function() {
        //muzzle Hide
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_muzzleAttacment_muzzle tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_muzzle');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.hide(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_muzzleAttacment_muzzle" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });
  
        //Silincer Show
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_muzzleAttacment_silincer dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_muzzleAttacment_silincer');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_muzzleAttacment_silincer" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });      
      });
      /* <===== Muzzle Attachment =====> */

      /*<===== Magazine Button =====> */

      //M4_magazine_magpulBlack
      document.getElementById('M4_magazine_magpulBlackButton').addEventListener("click", function() {
      //show M4_magazine_magpulBlack
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulBlack dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulBlack');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.show(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulBlack" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //hide M4_magazine_magpulFDE
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulFDE tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulFDE');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulFDE" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //hide M4_magazine_V1
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_V1 tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_V1');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_V1" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });
        
      });

      //M4_magazine_magpulFDE
      document.getElementById('M4_magazine_magpulFDEButton').addEventListener("click", function() {
      //hide M4_magazine_magpulBlack
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulBlack tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulBlack');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulBlack" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //show M4_magazine_magpulFDE
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulFDE dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulFDE');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.show(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulFDE" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //hide M4_magazine_V1
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_V1 tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_V1');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_V1" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });
      });

      //M4_magazine_V1
      document.getElementById('M4_magazine_V1Button').addEventListener("click", function() {
      //hide M4_magazine_magpulBlack
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulBlack tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulBlack');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulBlack" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //hide M4_magazine_magpulFDE
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_magpulFDE tidak dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_magpulFDE');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.hide(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_magpulFDE" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });

      //show M4_magazine_V1
      api.getNodeMap(function(err, nodes) {
        if (!err) {
          console.log("M4_magazine_V1 dipilih");
          const lid = Object.values(nodes).find((node) => node.name === 'M4_magazine_V1');
    
          // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
          if (lid) {
            api.show(lid.instanceID); // Menyembunyikan objek
          } else {
            console.error('Node with name "M4_magazine_V1" not found');
          }
        } 
        else
        {
          console.error('Error retrieving node map', err);
        }
      });
      });

      /*<===== Magazine Button =====> */

      /* <===== Sight =====> */
      //M4_sight
      const buttonA = document.getElementById('M4_sightButton');
      let isO = true;

      buttonA.addEventListener('click', () => {
        //pasang Sight
        if (isO) {
          //M4_sight Show
          api.getNodeMap(function(err, nodes) {
            if (!err) {
            console.log("M4_sight dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_sight');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_sight" not found');
            }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
            });
        }
        //lepas Sight
        else {        
          //M4_sight Hide
          api.getNodeMap(function(err, nodes) {
            if (!err) {
            console.log("M4_sight tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_sight');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.hide(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_sight" not found');
            }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
            });
        }
        isO = !isO;
      });

      //M4_opticsight
      const buttonB = document.getElementById('M4_opticSightButton');
      let isOB = true;

      buttonB.addEventListener('click', () => {
        if (isOB) {
            //M4_opticsight Show
            api.getNodeMap(function(err, nodes) {
            if (!err) {
            console.log("M4_opticsight dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_opticsight');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_opticsight" not found');
            }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
            });
        } else {
            //M4_opticsight Hide
            api.getNodeMap(function(err, nodes) {
              if (!err) {
              console.log("M4_opticsight tidak dipilih");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_opticsight');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.hide(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_opticsight" not found');
              }
              } 
              else
              {
                console.error('Error retrieving node map', err);
              }
              });
        }
        isOB = !isOB;
      });     
      /* <===== Sight =====> */


      /*<===== Rail System Button =====> */
      //Rail Sytem A
      document.getElementById('M4_railsystemAButton').addEventListener("click", function() {
        //M4_railsystemA Show
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_railsystemA dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemA');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_railsystemA" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });

        //M4_railsystemB Hide
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_railsystemB tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemB');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.hide(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_railsystemB tidak dipilih" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });
      });  

      //Rail System B
      document.getElementById('M4_railsystemBButton').addEventListener("click", function() {
          //M4_railsystemA Show
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_railsystemA tidak dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemA');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.hide(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_railsystemA" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });

        //M4_railsystemB Show
        api.getNodeMap(function(err, nodes) {
          if (!err) {
            console.log("M4_railsystemB dipilih");
            const lid = Object.values(nodes).find((node) => node.name === 'M4_railsystemB');
      
            // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
            if (lid) {
              api.show(lid.instanceID); // Menyembunyikan objek
            } else {
              console.error('Node with name "M4_railsystemB tidak dipilih" not found');
            }
          } 
          else
          {
            console.error('Error retrieving node map', err);
          }
        });
      });  

      /*<===== Rail System Button =====> */

      /* <===== Vertical Grip =====> */
      const buttonC = document.getElementById('M4_verticalGripButton');
      let isOC = true;

      buttonC.addEventListener('click', () => {
        if (isOC) {
          //Hide vertical grip
          api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_verticalGrip dipilih");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_verticalGrip');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.show(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_railsystemB" not found');
              }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
          });


        } else {
          //Show vertical grip
          api.getNodeMap(function(err, nodes) {
            if (!err) {
              console.log("M4_verticalGrip tidak dipilih");
              const lid = Object.values(nodes).find((node) => node.name === 'M4_verticalGrip');
        
              // Periksa apakah node ditemukan sebelum mencoba mengakses instanceID
              if (lid) {
                api.hide(lid.instanceID); // Menyembunyikan objek
              } else {
                console.error('Node with name "M4_railsystemB" not found');
              }
            } 
            else
            {
              console.error('Error retrieving node map', err);
            }
          });


        }
        isOC = !isOC;
      });
      /* <===== Vertical Grip =====> */
      
    });
  },
  error: function onError() {
    console.log('Viewer error');
  }
});