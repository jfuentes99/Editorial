import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

profileForm = this.fb.group({
correo: ['',Validators.email],
usuario: ['',Validators.required],
login: ['',Validators.minLength(8)],

});
  constructor(private fb:FormBuilder, private router:Router, private log:LoginService){

}

ngOnInit(): void {

}
login(){
if(this.profileForm.valid){
  this.profileForm.markAllAsTouched();
  this.log.login(this.profileForm.value)

  //cuando lo mandemos a la BBDD
  // .subscribe({
  //   next:(userData:any)=>{
  //     console.log(userData)
  //   },
  //   error:(errorData:any)=>{
  //     console.log(errorData)
  //   },
  //   complete:()=>{
  //     console.log("login completo")
  //   }

  // })
this.router.navigateByUrl('/inicio')
this.profileForm.reset();

}else{alert("NOOOOO")}
  }

}
