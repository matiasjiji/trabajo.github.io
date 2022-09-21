$(document).ready(function(){
    $('.AsisEncargado').click( function(){
        var className = $(this).attr('class');
        
        if (!className.indexOf("columnacero") > -1)  {  
            $(this).addClass('columnacero')
        }  

        if (className.indexOf("columnacero") > -1)  {  
            $(this).removeClass('columnacero')
        }   
    })

    $('.AsisCapitan ').click( function(){
        var className = $(this).attr('class');
        
        if (!className.indexOf("primeracolumna") > -1)  {  
            $(this).addClass('primeracolumna')
        }  

        if (className.indexOf("primeracolumna") > -1)  {  
            $(this).removeClass('primeracolumna')
        }   
    })

    $('.RobotServ').click( function(){
        var className = $(this).attr('class');
        
        if (!className.indexOf("segundacolumna") > -1)  {  
            $(this).addClass('segundacolumna')
        }  

        if (className.indexOf("segundacolumna") > -1)  {  
            $(this).removeClass('segundacolumna')
        }   
    })

    $('.duocFila').click( function(){
        var className = $(this).attr('class');
        
        if (!className.indexOf("terceracolumna") > -1)  {  
            $(this).addClass('terceracolumna')
        }  

        if (className.indexOf("terceracolumna") > -1)  {  
            $(this).removeClass('terceracolumna')
        }   
    })

    $('.turistaBasic').click( function(){
        var className = $(this).attr('class');
        
        if (!className.indexOf("cuartacolumna") > -1)  {  
            $(this).addClass('cuartacolumna')
        }  

        if (className.indexOf("cuartacolumna") > -1)  {  
            $(this).removeClass('cuartacolumna')
        }   
    })




    $('.btnasientos').click(function(){
        var probando = $(this).attr('class');

        if(!probando.indexOf('btnasientosprobando') > -1){
            $(this).addClass('btnasientosprobando')
            $(this).text('Agregado al carro')
        }
    });
})