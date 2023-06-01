import { Component, Input } from '@angular/core';

@Component({
  selector: 'pkd2-spinner',
  templateUrl: './pkd2-spinner.component.html',
  styleUrls: ['./pkd2-spinner.component.scss']
})
export class Pkd2SpinnerComponent {

  @Input()
  public showing:boolean;
  
}