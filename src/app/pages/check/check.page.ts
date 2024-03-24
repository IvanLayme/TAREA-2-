import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data=[
    {
      name:'primary',
      select:true
    },
    {
      name:'secondary',
      select:false
    },
    {
      name:'tertiary',
      select:true
    },
    {
      name:'success',
      select:false
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
