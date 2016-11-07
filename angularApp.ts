
namespace App {

    angular.module("CoolApp", ['moduleOne', 'moduleTwo'])
    angular.module('moduleOne', []);
    angular.module('moduleTwo', []);

    class HomeController {
       // public field that will be exposed to the view
       public landingMsg: string = "Welcome to the finest app this site of silicon valley.";
       public hobbies: string [];
       public hobby: string;
       public selectedHobby: string;
       public selectHobby(hobby: string){
         this.selectedHobby = hobby;
       }
       constructor() {
          this.hobbies = ["surfing!", "motorcycle skydiving!", "flamethrower competition!"];
       }
   }

   class calcController extends HomeController {
     public currentValue:number = 0;
   }

   angular.module('CoolApp').controller("homeController", HomeController);
      angular.module('CoolApp').controller("calcController", calcController);

}
