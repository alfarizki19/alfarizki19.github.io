var mainBodyOption = 0;  // Nilai awal mainBodyOption
var stockOption = 0;
var muzzleAttachmentOption = 0;
var magazineOption = 0;
var sightOption = 0;
var opticSightOption = 0;
var railSystemsOption = 0;
var verticalGripOptions = 0;

//kondisi awal
console.log("selectedPartSystem Loaded Start ... ");

document.getElementById('stockItemGroup').style.display = 'none';

document.getElementById('muzzleAttachmentItemGroup').style.display = 'none';

document.getElementById('magazineItemGroup').style.display = 'none';

document.getElementById('sightItemGroup').style.display = 'none';

document.getElementById('opticSightItemGroup').style.display = 'none';

document.getElementById('railSystemsItemGroup').style.display = 'none';

document.getElementById('verticalGripItemGroup').style.display = 'none';

console.log("selectedPartSystem Loaded Finish ... ");


/*==========================*/

//tahap memilih main body
//M4_mainbody
document.getElementById('mainBodyV1Button').addEventListener('click', function() 
{
    mainBodyOption = 1;
    document.getElementById('stockItemGroup').style.display = 'block';

    document.getElementById('muzzleAttachmentItemGroup').style.display = 'block';
    document.getElementById('magazineItemGroup').style.display = 'block';
    document.getElementById('sightItemGroup').style.display = 'block';
    document.getElementById('opticSightItemGroup').style.display = 'block';
    document.getElementById('railSystemsItemGroup').style.display = 'block';
    document.getElementById('verticalGripItemGroup').style.display = 'block';

    document.getElementById('M4_stock_Button').style.display = 'block';
    document.getElementById('M4_stockDesert_Button').style.display = 'block';
    document.getElementById('stockItemContentParagraph').style.display = 'none';
});

//M4_mainbodydesertcomplete
document.getElementById('mainBodyDesertCompleteButton').addEventListener('click', function() 
{
    mainBodyOption = 2;
    stockOption = 0;


    document.getElementById('muzzleAttachmentItemGroup').style.display = 'block';
    document.getElementById('magazineItemGroup').style.display = 'block';
    document.getElementById('sightItemGroup').style.display = 'block';
    document.getElementById('opticSightItemGroup').style.display = 'block';
    document.getElementById('railSystemsItemGroup').style.display = 'block';
    document.getElementById('verticalGripItemGroup').style.display = 'block';

    document.getElementById('M4_stock_Button').style.display = 'none';
    document.getElementById('M4_stockDesert_Button').style.display = 'none';
    document.getElementById('stockItemContentParagraph').style.display = 'block';
});


/* <===== Stock =====> */
//M4_stock
document.getElementById('M4_stock_Button').addEventListener("click", function() {
    stockOption = 1;
});

//M4_stockdesert
document.getElementById('M4_stockDesert_Button').addEventListener("click", function() {
    stockOption = 2;
});
/* <===== Stock =====> */


/* <===== Muzzle Attachment =====> */
//M4_muzzleAttacment_muzzle
document.getElementById('M4_muzzleAttacment_muzzleButton').addEventListener("click", function() {
    muzzleAttachmentOption = 1;
});

//M4_muzzleAttacment_silincer
document.getElementById('M4_muzzleAttacment_silincerButton').addEventListener("click", function() {
    muzzleAttachmentOption = 2;     
});

/* <===== Muzzle Attachment =====> */

/*<===== Magazine Button =====> */
//M4_magazine_magpulBlack
document.getElementById('M4_magazine_magpulBlackButton').addEventListener("click", function() {
    magazineOption = 1;
});
  
//M4_magazine_magpulFDE
document.getElementById('M4_magazine_magpulFDEButton').addEventListener("click", function() {
    magazineOption = 2;
});
  
//M4_magazine_V1
document.getElementById('M4_magazine_V1Button').addEventListener("click", function() {
    magazineOption = 3;   
});  
/*<===== Magazine Button =====> */


/*<===== Sight Button =====> */
//Sight
const buttonA = document.getElementById('M4_sightButton');
    let isO = true;

    buttonA.addEventListener('click', () => {
        //Install Sight
        if (isO) {
            buttonA.textContent = 'Uninstall sight';
            sightOption = 1;
        }
        //Uninstall Sight
        else {
            buttonA.textContent = 'Install sight';
            sightOption = 0;
        }
        isO = !isO;
    });

//Optic Sight
const buttonB = document.getElementById('M4_opticSightButton');
    let isOB = true;

    buttonB.addEventListener('click', () => {
        //install Optic Sight
        if (isOB) {
            buttonB.textContent = 'Uninstall Optic Sight';
            opticSightOption = 1;
        } 
        //Uninstall Optic Sight
        else {
            buttonB.textContent = 'Install Optic Sight';
            opticSightOption = 0;
        }
        isOB = !isOB;
    });

/*<===== Sight Button =====> */


/*<===== Rail System Button =====> */
//Rail Sytem A
document.getElementById('M4_railsystemAButton').addEventListener("click", function() {
    railSystemsOption = 1;   
});  

//Rail System B
document.getElementById('M4_railsystemBButton').addEventListener("click", function() {
    railSystemsOption = 2;   
});  

/*<===== Rail System Button =====> */

/*<===== Vertical Grip =====> */
const buttonC = document.getElementById('M4_verticalGripButton');
    let isOC = true;

    buttonC.addEventListener('click', () => {
        //vertical grip dipilih
        if (isOC) {
            buttonC.textContent = 'Uninstall Vertical Grip';
            verticalGripOptions = 1;
        } 
        //vertical grip tidak dipilih
        else {
            buttonC.textContent = 'Install Vertical Grip';
            verticalGripOptions = 0;
        }
        isOC = !isOC;
    });

/*<===== Vertical Grip =====> */

