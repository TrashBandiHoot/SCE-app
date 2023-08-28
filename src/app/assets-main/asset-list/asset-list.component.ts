import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent {

  current = 0;
  colors = ["gray", "yellow", "green", "red"]
  buttonTextList = ["Not Started", "Installed", "Installed W/Pic", "It's Fucked"]
  text = "Not Started"
  numberOfUnits = 5;

//! button needs to be its own component in order to have its own instance for each unit
  buttonClick() {
    this.current = (this.current + 1) % this.colors.length
    this.text = this.buttonTextList[this.current]
  }


 
  
}
