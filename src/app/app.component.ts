import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

   @ViewChild('userForm') uf:NgForm;

    setDefaultValue(){
      this.uf.setValue({
        "name":"bala",
        "email":"bala123@gmail.com",
        "state":"TN",
        "pass":"bala123"
      })
    }

    patchValue(){
      this.uf.form.patchValue({
        "email":"bala456@gmail.com",
        "state":"KL",
      })
    }


   state = [{
    state:'TN',
  },
{
  state:'AP'
},
{
  state:'KL'
}]


onSubmit=(userForm:NgForm)=>{
  console.log('user', userForm)
  console.log('invalid',userForm.form.invalid)
 }

}
