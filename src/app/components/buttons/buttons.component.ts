import { Component, OnInit } from '@angular/core';
import { IButton } from './OneButton';
import { AutoComponent } from '../auto/auto.component';
import { ShipComponent } from '../ship/ship.component';
import { PlaneComponent } from '../plane/plane.component';
import { Technic } from '../TechnicClass';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  public buttons: IButton[] = [];
  public technics: Technic[] = [];
  // public selectedTechnic: Technic | undefined; 
  constructor(){}
  public ngOnInit(): void {
    this.buttons = [
      {name: 'Biggest Car'},
      {name: 'Biggest Ship'},
      {name: 'Biggest Plane'},
    ];
    this.technics = [
      new AutoComponent(),
      new ShipComponent(),
      new PlaneComponent()
    ];
  }
  public toggle(object: Technic): void{
    object.visibility = !object.visibility;
  }
  public getTheObject(buttonName: string):void{
    this.technics.forEach(el => {
      el.visibility = false;
      if(el.name == buttonName){
        this.toggle(el);
      }
    })
  }
}
