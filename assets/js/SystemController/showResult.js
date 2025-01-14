document.getElementById('showConfigurationPart').addEventListener('click', function() {
    // Mendapatkan elemen modal
    var modal = new bootstrap.Modal(document.getElementById('modalConfigurationResult'));
    
    // Menampilkan modal
    modal.show();

    console.log("Main Body Option = " +mainBodyOption); //mainBody yang dipilih
    console.log("Stock Option = " +stockOption); //mainBody yang dipilih
    console.log("Muzzle Attachment Option = " +muzzleAttachmentOption); //mainBody yang dipilih
    console.log("Magazine Option = " +magazineOption); //mainBody yang dipilih

    console.log("Sight Option = " +sightOption); //mainBody yang dipilih
    console.log("Optic Sight Option = " +opticSightOption); //mainBody yang dipilih
    console.log("Rail System Option = " +railSystemsOption); //mainBody yang dipilih
    console.log("Vertical Grip Option = " +verticalGripOptions); //mainBody yang dipilih

    mainBodyResult();
    stockResult();
    muzzleResult();
    magazineResult();
    sightResult();
    opticSightResult();
    railSystemResult();
    verticalGripResult();
});


//show result main body option
function mainBodyResult()
{
    //tidak ada mainBody yang dipilih
    if(mainBodyOption == 0)
    {
        document.getElementById('listGroupItem_M4_mainbody').style.display = 'none';
        document.getElementById('listGroupItem_M4_mainbodydesertcomplete').style.display = 'none';
    }
    
    //mainBody
    if (mainBodyOption == 1)
    {
        document.getElementById('listGroupItem_M4_mainbody').style.display = 'block';
    }
    else if(mainBodyOption != 1)
    {
        document.getElementById('listGroupItem_M4_mainbody').style.display = 'none';
    }

    //mainBody Desert Complete        
    if (mainBodyOption == 2)
    {
        document.getElementById('listGroupItem_M4_mainbodydesertcomplete').style.display = 'block';
    }
    else if (mainBodyOption != 2)
    {
        document.getElementById('listGroupItem_M4_mainbodydesertcomplete').style.display = 'none';
    }
}

//show result stock option
function stockResult()
{
    //tidak ada stock dipilih
    if(stockOption == 0)
    {
        document.getElementById('listGroupItem_M4_stock').style.display = 'none';
        document.getElementById('listGroupItem_M4_stockDesert').style.display = 'none';
    }

    //M4_Stock dipilih
    if(stockOption == 1)
    {
        document.getElementById('listGroupItem_M4_stock').style.display = 'block';
    }
    else if(stockOption != 1)
    {
        document.getElementById('listGroupItem_M4_stock').style.display = 'none';
    }

    //M4_stockDesertComplete Dipilih
    if(stockOption == 2)
    {
        document.getElementById('listGroupItem_M4_stockDesert').style.display = 'block';
    }
    if(stockOption != 2)
    {
        document.getElementById('listGroupItem_M4_stockDesert').style.display = 'none';
    }
}

//show result muzzle attachment option
function muzzleResult()
{
    if(muzzleAttachmentOption == 0)
    {
        document.getElementById('listGroupItem_M4_muzzleAttacment_muzzle').style.display = 'none';
        document.getElementById('listGroupItem_M4_muzzleAttacment_silincer').style.display = 'none';
    }

    //Muzzle Dipilih
    if(muzzleAttachmentOption == 1)
    {
        document.getElementById('listGroupItem_M4_muzzleAttacment_muzzle').style.display = 'block';
    }
    else if (muzzleAttachmentOption != 1)
    {
        document.getElementById('listGroupItem_M4_muzzleAttacment_muzzle').style.display = 'none';
    }

    //Silincer Dipilih
    if(muzzleAttachmentOption == 2)
    {
        document.getElementById('listGroupItem_M4_muzzleAttacment_silincer').style.display = 'block';
    }
    else if (muzzleAttachmentOption != 2)
    {
        document.getElementById('listGroupItem_M4_muzzleAttacment_silincer').style.display = 'none';
    }
}

//show result magazine option
function magazineResult()
{
    //belum atau tidak ada magazine yang dipilih
    if(magazineOption == 0)
    {
        document.getElementById('listGroupItem_M4_magazine_magpulBlack').style.display = 'none';
        document.getElementById('listGroupItem_M4_magazine_magpulFDE').style.display = 'none';
        document.getElementById('listGroupItem_M4_magazine_V1').style.display = 'none';
    }

    //memilih magazine magapul black
    if(magazineOption == 1)
    {
        document.getElementById('listGroupItem_M4_magazine_magpulBlack').style.display = 'block';
    }
    if(magazineOption != 1)
    {
        document.getElementById('listGroupItem_M4_magazine_magpulBlack').style.display = 'none';
    }

    //memilih magazine magapul FDE
    if(magazineOption == 2)
    {
        document.getElementById('listGroupItem_M4_magazine_magpulFDE').style.display = 'block';
    }
    if(magazineOption != 2)
    {
        document.getElementById('listGroupItem_M4_magazine_magpulFDE').style.display = 'none';
    }

    //memilih magazine V1
    if(magazineOption == 3)
    {
        document.getElementById('listGroupItem_M4_magazine_V1').style.display = 'block';
    }
    if(magazineOption != 3)
    {
        document.getElementById('listGroupItem_M4_magazine_V1').style.display = 'none';
    }
}

//show result sight
function sightResult()
{
    //belum atau tidak ada sight yang dipilih
    if(sightOption == 0)
    {
        document.getElementById('listGroupItem_M4_sight').style.display = 'none';
    }

    //memilih sight
    if(sightOption == 1)
    {
        document.getElementById('listGroupItem_M4_sight').style.display = 'block';
    }

    else if(sightOption != 1)
    {
        document.getElementById('listGroupItem_M4_sight').style.display = 'none';
    }
}

//show result optic sight
function opticSightResult()
{
    //belum atau tidak ada sight yang dipilih
    if(opticSightOption == 0)
    {
        document.getElementById('listGroupItem_M4_opticsight').style.display = 'none';
    }

    //memilih sight
    if(opticSightOption == 1)
    {
        document.getElementById('listGroupItem_M4_opticsight').style.display = 'block';
    }

    else if(opticSightOption != 1)
    {
        document.getElementById('listGroupItem_M4_opticsight').style.display = 'none';
    }
}

//show result rail system
function railSystemResult()
{
    //belum atau tidak ada rail system yang dipilih
    if(railSystemsOption == 0)
    {
        document.getElementById('listGroupItem_M4_railsystemA').style.display = 'none';
        document.getElementById('listGroupItem_M4_railsystemB').style.display = 'none';
    }

    //memilih rail system A
    if(railSystemsOption == 1)
    {
        document.getElementById('listGroupItem_M4_railsystemA').style.display = 'block';
    }
    else if (railSystemsOption != 1)
    {
        document.getElementById('listGroupItem_M4_railsystemA').style.display = 'none';
    }

    //memilih rail system B
    if(railSystemsOption == 2)
    {
        document.getElementById('listGroupItem_M4_railsystemB').style.display = 'block';
    }
    else if (railSystemsOption != 2)
    {
        document.getElementById('listGroupItem_M4_railsystemB').style.display = 'none';
    }
}

function verticalGripResult()
{
    //belum atau tidak ada vertical grip yang dipilih
    if(verticalGripOptions == 0)
    {
        document.getElementById('listGroupItem_M4_verticalGrip').style.display = 'none';
    }

    //memilih vertical grip
    if(verticalGripOptions == 1)
    {
        document.getElementById('listGroupItem_M4_verticalGrip').style.display = 'block';
    }
    else if (verticalGripOptions != 1)
    {
        document.getElementById('listGroupItem_M4_verticalGrip').style.display = 'none';
    }
}