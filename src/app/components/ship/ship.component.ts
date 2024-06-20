import { Component, OnInit } from '@angular/core';
import { Technic } from '../TechnicClass';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent extends Technic implements OnInit{
  constructor(){
    super("https://www.ship-technology.com/wp-content/uploads/sites/8/2024/03/shutterstock_2385318043.jpg", "Biggest Ship");
  }
  public ngOnInit(): void {}
}
