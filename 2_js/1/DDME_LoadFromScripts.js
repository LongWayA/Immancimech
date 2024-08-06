
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-19.02.2023-
 //

  /*
   НАЗНАЧЕНИЕ
   Считываем карту из скрипта. т.е. карта в текстовом виде записана в этом скрипте

   ИСПОЛЬЗУЕТ МОДУЛИ
       DDME_HTML5_Canvas.js
       DDME_Map_2D.js
       DDME_EditorFrameDraw.js

  */


window.LoadFromScripts = {};
LoadFromScripts.isOk = " ";//

LoadFromScripts.NAME = "LoadFromScripts";//

// Внешние ссылки
LoadFromScripts.HTML5_Canvas_TestLoadedScripts_OUT;
LoadFromScripts.Map_2D_OUT;
LoadFromScripts.EditorFrameDraw_OUT;


//=============================================================================
LoadFromScripts.ini = function(){

  LoadFromScripts.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  LoadFromScripts.Map_2D_OUT = Map_2D;
  LoadFromScripts.EditorFrameDraw_OUT = EditorFrameDraw;
}
//=============================================================================



//=============================================================================
LoadFromScripts.resetMapInBrowser = function() {

  //console.log( "DD_LoadFromScripts.js: LoadFromScripts.resetMapInBrowser ");

  LoadFromScripts.ini_ResetMapString_();

  let saveGrounds  = LoadFromScripts.resetGrounds;
  let saveItems    = LoadFromScripts.resetItems;
  let saveMonsters = LoadFromScripts.resetMonsters;

  LoadFromScripts.Map_2D_OUT.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);
  LoadFromScripts.EditorFrameDraw_OUT.drowFrame();
};
//=============================================================================

// 
 //=============================================================================
 LoadFromScripts.ini_loadFromBrowser = function() {

  // console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");
 
    LoadFromScripts.ini_DefoltMapString();

   let saveGrounds  = LoadFromScripts.savedGrounds;
   let saveItems    = LoadFromScripts.savedItems;
   let saveMonsters = LoadFromScripts.savedMonsters;
 
   LoadFromScripts.Map_2D_OUT.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);
   LoadFromScripts.EditorFrameDraw_OUT.drowFrame();

 };
 //=============================================================================
 
//=============================================================================
LoadFromScripts.ini_DefoltMapString = function(){

//************************************************
LoadFromScripts.savedGrounds  = 
`gggggggggggggggggggggggg
gbbbbbbbbbbbbbbbbbbbbbbg
gbddddddddddddddddddddbg
gbdeeefeeefeeefeeefeedbg
gbdeaefeaefeaefeaefeadbg
gbdeeefeeefeeefeeefeedbg
gbdffffffffffffffffffdbg
gbddddddddddddddddddddbg
gbbbbbbbbbbbbbbbbbbbbbbg
gggggggggggggggggggggggg`;
//************************************************

//************************************************
LoadFromScripts.savedItems    = 
`rrrrrrrrrrrrrrrrrrrrrrrr
raaaaaaaaaaaaaaaaaaaaaar
rabbbbbbbbbbbbbbbbbbbbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabbbbbbbbbbbbbbbbbbbbar
raaaaaaaaaaaaaaaaaaaaaar
rrrrrrrrrrrrrrrrrrrrrrrr`;
//************************************************

//************************************************
LoadFromScripts.savedMonsters = 
`bbbbbbbbbbbbbbbbbbbbbbbb
bnnnnnnnnnnnnnnnnnnnnnnb
bnffffffffffffffffffffnb
bnfjjjkjjjkjjjkjjjkjjfnb
bnfjajkjmjkjejkjgjkjlfnb
bnfjjjkjjjkjjjkjjjkjjfnb
bnfkkkkkkkkkkkkkkkkkkfnb
bnffffffffffffffffffffnb
bnnnnnnnnnnnnnnnnnnnnnnb
bbbbbbbbbbbbbbbbbbbbbbbb`;
//************************************************


//************************************************
LoadFromScripts.listLoadingMapsNotSorting  = `aaa_166049861010872800.map!nameUserMapDefault_166045772813586100.map!TEST_1_166045432241485100.map!a_166058583166303900.map!nameUserMapDefault_166057137646274300.map!aaaaaaaaa_166098447721756800.map!testing from bro_166057142258942400.map!nameUserMapDefault_166045821377869700.map!testing from bro_166057141048917600.map!nameUserMapDefault_166075851318186700.map!q2_166045791250258900.map!nameUserMapDefault_166098397839015700.map!nameUserMapDefault_166075878560985400.map!nameUserMapDefault_166049887843040200.map!ttt_166075813539358400.map!nameUserMapDefault_166075815840922400.map!qw_166049894704985100.map!nameUserMapDefault_166049846871727300.map!nameUserMapDefault_166075852963099500.map!nameUserMapDefault_166058577958526300.map!`;
//************************************************

}
//=============================================================================


//=============================================================================
LoadFromScripts.ini_ResetMapString = function(){

//************************************************
LoadFromScripts.resetGrounds  = 
`aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa`;
//************************************************

//************************************************
LoadFromScripts.resetItems    = 
`cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc`;
//************************************************

//************************************************
LoadFromScripts.resetMonsters = 
`mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm`;
//************************************************
}
//=============================================================================


//=============================================================================
LoadFromScripts.ini_ResetMapString_ = function(){

//************************************************
LoadFromScripts.resetGrounds  = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************

//************************************************
LoadFromScripts.resetItems    = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************

//************************************************
LoadFromScripts.resetMonsters = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************
  }
  //=============================================================================
  
  LoadFromScripts.ini();

  LoadFromScripts.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_LoadFromScripts.js+'); 

  LoadFromScripts.isOk = "OK";//