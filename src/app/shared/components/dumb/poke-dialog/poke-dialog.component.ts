import { AfterViewInit, Component, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'poke-dialog',
  templateUrl: './poke-dialog.component.html',
  styleUrls: ['./poke-dialog.component.scss']
})
export class PokeDialogComponent implements AfterViewInit {

  @ViewChild('dialogContent', {read: ViewContainerRef }) 
  private dialogContent!:ViewContainerRef;

  public element: Type<unknown>;
  public options: Object;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const _element = this.dialogContent.createComponent(this.element) as any;
      if (this.options) {
        _element.instance.data = this.options
      }
    });
  }
}