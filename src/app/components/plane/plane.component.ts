import { Component, OnInit } from '@angular/core';
import { Technic } from '../TechnicClass';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent extends Technic implements OnInit{
  constructor(){
    super("https://www.asme.org/getmedia/358b8902-ef65-4364-8ca2-367563d67e36/030524_5-Largest-Aircraft-to-Ever-Fly_hero.jpg?width=950&height=633&ext=.jpg", "Biggest Plane");
  }
  public ngOnInit(): void {}
}

