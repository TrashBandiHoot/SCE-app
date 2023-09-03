import { Component } from '@angular/core';

@Component({
  selector: 'app-quad-button',
  templateUrl: './quad-button.component.html',
  styleUrls: ['./quad-button.component.css']
})
export class QuadButtonComponent {

  current = 0;
  colors = ["gray", "yellow", "green", "red"]
  buttonTextList = ["Not Started", "Installed", "Installed W/Pic", "It's Fucked"]
  text = "Not Started"

//! button needs to be its own component in order to have its own instance for each unit
  buttonClick() {
    this.current = (this.current + 1) % this.colors.length
    this.text = this.buttonTextList[this.current]
  }

}
