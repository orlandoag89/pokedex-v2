import { Component, Input } from '@angular/core';

@Component({
  selector: 'pkd2-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input()
  public showing:boolean;
  
}