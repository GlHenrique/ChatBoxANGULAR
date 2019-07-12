import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  atualizaRespostaImage(event) {
    console.log(event);
    const image = <FileList>event.srcElement.files;
    console.log(image[0]);
  }






}
