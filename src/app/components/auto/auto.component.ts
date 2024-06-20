import { Component, OnInit } from '@angular/core';
import { Technic } from '../TechnicClass';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent extends Technic implements OnInit{
  constructor(){
    super("https://media.techeblog.com/images/hummer-h1-x3-worlds-largest.jpg", "Biggest Car");
  }
  public ngOnInit(): void {}
}
