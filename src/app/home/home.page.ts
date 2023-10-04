import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 funcionarios:any 

 listarfuncionarios(){
  fetch('').then((response)=>
  response.json())
  .then((data)=>{
    console.log(data.funcionarios)
    this.funcionarios = data.funcionarios
  })
 }

 inserirfuncionario(){
  fetch('', {
    method: 'POST',
  }).then((response)=>{
    response.json()
  }).then((insert)=>{
    this.funcionarios = insert
  })
 }
}
