import { Component } from '@angular/core';
import {LoginDetails} from "../../shared/models/login.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  exampleValue = 'es nezinu';

  login(loginDetails: LoginDetails):void {
    console.log('login info', loginDetails)
  }
}
