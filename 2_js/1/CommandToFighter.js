
 // Copyright (c) 2018, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified 19.08.2018 - 19.03.2019 - 30.05.2019 - 14.07.2019
 // - 10.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   ArenaFjs_R
   Render_R
  */

  //alert("module CommandToFighter start");
  //============================================================================

window.CommandToFighter_R = {};
CommandToFighter_R.NAME = 'CommandToFighter_R';//

// команды бойцам
CommandToFighter_R.STANCE  = 0;// стойка
CommandToFighter_R.LEFT  = 1;// движение влево
CommandToFighter_R.RIGHT = 2;// движение вправо
CommandToFighter_R.UP    = 3;// движение вверх
CommandToFighter_R.DOWN  = 4;// движение вниз
CommandToFighter_R.RUN   = 5;// бег

// передняя и задняя конечность это относительно боковой стойки
CommandToFighter_R.FRONTPUNCH = 6;// удар передней рукой
CommandToFighter_R.BACKPUNCH  = 7;// удар задней рукой
CommandToFighter_R.FRONTKICK  = 8;// удар передней ногой
CommandToFighter_R.BACKKICK   = 9;// удар задней ногой
CommandToFighter_R.BLOCK      = 10;// блок
CommandToFighter_R.TELEPORT   = 11;// перемещение в другой конец арены,
                                   // применяется против зажима у края
//
//==============================================================================
CommandToFighter_R.get_commandToNumState = function(_Fighter, command) {

   var numState = 0;
   _Fighter.teleport = 0;

   switch(command){

       case CommandToFighter_R.STANCE:  //
            numState = 0;
       break;

       case CommandToFighter_R.LEFT:  //
           if (_Fighter.mirror == 1) {
              numState = 1; // WALKING_FORWARD
           } else {
              numState = 2; // WALKING_BACK
           };
       break;

       case CommandToFighter_R.RIGHT:  //
           if (_Fighter.mirror != 1) {
              numState = 1;
           } else {
              numState = 2;
           };
       break;

       case CommandToFighter_R.UP:  //
            //numState = ;
       break;

       case CommandToFighter_R.DOWN:  //
            //numState = ;
       break;

       case CommandToFighter_R.RUN:  //
            numState = 3;
       break;

       case CommandToFighter_R.FRONTPUNCH:  //
            numState = 4;
       break;

       case CommandToFighter_R.BACKPUNCH:  //
            numState = 5;
       break;

       case CommandToFighter_R.FRONTKICK:  //
            numState = 6;
       break;

       case CommandToFighter_R.BACKKICK:  //
             numState = 7;
       break;

       case CommandToFighter_R.BLOCK:  //
             numState = 8;
       break;

       case CommandToFighter_R.TELEPORT:  //
            numState = 0;
            _Fighter.teleport = 1;
       break;
   };


   return (numState);

};
//==============================================================================

CommandToFighter_R.toFighterLeft = new CommandToFighter_CL();//
CommandToFighter_R.toFighterRight = new CommandToFighter_CL();//



function CommandToFighter_CL(){

   //saveCommandToFighter-------------------
   this.NAME_CL = 'NAME_CL';//
   this.saveCommandToFighter_command = 'command';
   this.saveCommandToFighter_commandText = 'commandText';
   this.saveCommandToFighter_update = 0;


   // тут передаем команды  от человека бойцу
   //==============================================================================
   this.GammerToFighterLeftTick = function(_Fighter) {

     var stateF = CommandToFighter_R.get_commandToNumState(
         _Fighter, this.saveCommandToFighter_command);

     var commandF = SpritesAnimators_R.STATE_ANI[stateF];
     //console.log('!!!  CommandToFighter_R.NAME = ' +  CommandToFighter_R.NAME);
     //console.log('!!!  this.NAME_CL = ' +  this.NAME_CL);
     //console.log('!!! CommandToFighter: stateF = ' + stateF + ' commandF = ' + commandF + ' this.saveCommandToFighter_command = ' + this.saveCommandToFighter_command);

       _Fighter.setState(commandF);
   };
   //==============================================================================


   // тут передаем команды всем бойцам и бойцицам
   //=============================================================================
   this.tick = function(_FighterSheeva_mk3_R1) {
      if(this.saveCommandToFighter_update == 1) {
         // console.log('CommandToFighter:  this.NAME = ' +  this.NAME);
         // console.log('CommandToFighter: command = ' + this.saveCommandToFighter_command + ' commandText = ' + this.saveCommandToFighter_commandText);
         // console.log('CommandToFighter: update = ' + this.saveCommandToFighter_update);
         this.GammerToFighterLeftTick(_FighterSheeva_mk3_R1);
         this.saveCommandToFighter_update = 0;
      };
   };
   //=============================================================================

   //==========================================================================
   this.ini = function(_num) {

       this.NAME_CL = 'CommandToFighter_CL ' + _num;//
       this.saveCommandToFighter_command = 999;
       this.saveCommandToFighter_commandText = 'commandText';
       this.saveCommandToFighter_update = 0;
   };
   //==========================================================================
};

//==============================================================================
Game_R.yT = Game_R.yT + Game_R.dyT;//
Game_R.context.strokeText ('5   module "CommandToFighter" loaded', 1100, Game_R.yT);

//==============================================================================
//alert("module CommandToFighter done");

/*
// устанавливаем команды для бойца управляемого игроком и стоящего в начале слева
 UserInput_R.set_CommandToFighter_R_commandToFighterGammerLeft_IN = function(command, commandText) {
    CommandToFighter_R.commandToFighterGammerLeft.command = command;
    CommandToFighter_R.commandToFighterGammerLeft.commandText = commandText;
 };


 UserInput_R.get_CommandToFighter_R_STANCE_IN = function() {
    return (CommandToFighter_R.STANCE);
 };

 UserInput_R.get_CommandToFighter_R_LEFT_IN = function() {
    return (CommandToFighter_R.LEFT);
 };

 UserInput_R.get_CommandToFighter_R_RIGHT_IN = function() {
    return (CommandToFighter_R.RIGHT);
 };

 UserInput_R.get_CommandToFighter_R_UP_IN = function() {
    return (CommandToFighter_R.UP);
 };

 UserInput_R.get_CommandToFighter_R_DOWN_IN = function() {
    return (CommandToFighter_R.DOWN);
 };


 UserInput_R.get_CommandToFighter_R_RUN_IN = function() {
    return (CommandToFighter_R.RUN);
 };

 UserInput_R.get_CommandToFighter_R_FRONTPUNCH_IN = function() {
    return (CommandToFighter_R.FRONTPUNCH);
 };

 UserInput_R.get_CommandToFighter_R_BACKPUNCH_IN = function() {
    return (CommandToFighter_R.BACKPUNCH);
 };

 UserInput_R.get_CommandToFighter_R_FRONTKICK_IN = function() {
    return (CommandToFighter_R.FRONTKICK);
 };

 UserInput_R.get_CommandToFighter_R_BACKKICK_IN = function() {
    return (CommandToFighter_R.BACKKICK);
 };

 UserInput_R.get_CommandToFighter_R_BLOCK_IN = function() {
    return (CommandToFighter_R.BLOCK);
 };

 UserInput_R.get_CommandToFighter_R_TELEPORT_IN = function() {
    return (CommandToFighter_R.TELEPORT);
 };
*/
