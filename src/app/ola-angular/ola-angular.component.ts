import { Component } from '@angular/core';

@Component({
  selector: 'ola-angular', //nome da tag para ser usado no html
  templateUrl: './ola-angular.component.html',
  styleUrls:['./ola-angular.component.css']

})
export class OlaAngularComponent { //tornar uma classe publica
  framework = 'Angular';

}
