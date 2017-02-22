import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Matte Web!';
  mode = 'Multiplication';

  public showMultiplication():boolean
  {
    return this.mode=='Multiplication';
  }  

  public showAddition():boolean
  {
    return this.mode=='Addition';
  }  

  public showSubtraction():boolean
  {
    return this.mode=='Subtraction';
  }  

  public showDivision():boolean
  {
    return this.mode=='Division';
  }  

  public setShowMultiplication()
  {
    this.mode = "Multiplication";
  }

    public setShowAddition()
  {
    this.mode = "Addition";
  }

    public setShowSubtraction()
  {
    this.mode = "Subtraction";
  }  

  public setShowDivision()
  {
    this.mode = "Division";
  }  
}


