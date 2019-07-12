import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  // É para setar como true o atributo abaixo quando finalizado;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  respostaNome: string;
  respostaEmail: string;
  respostaSenha: string;

  constructor(private formBuilder: FormBuilder, private cookie: CookieService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.respostaNome = '';
    this.respostaEmail = '';
    this.respostaSenha = '';
  }

  atualizaRespostaNome(resposta: Event) {
    this.respostaNome = (resposta.target as HTMLInputElement).value;
    // console.log(this.respostaNome);
    
  }

  atualizaRespostaEmail(resposta: Event) {
    this.respostaEmail = (resposta.target as HTMLInputElement).value;
    console.log(this.respostaEmail);
    
  }

  atualizaRespostaSenha(resposta: Event) {
    this.respostaSenha = (resposta.target as HTMLInputElement).value;
    // console.log(this.respostaSenha);
    
  }

  setCookie() {
    console.log('teste do tchais');
    this.cookie.set('username', this.respostaNome);
    this.cookie.set('useremail', this.respostaEmail);
    this.cookie.set('userpassword', this.respostaSenha);
    // this.cookie.set('userimage=', this.respostaXXX);

  }


}
