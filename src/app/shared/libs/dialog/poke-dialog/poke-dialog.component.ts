import { AfterViewInit, Component, Type, ViewChild, ViewContainerRef, inject, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'poke-dialog',
  templateUrl: './poke-dialog.component.html',
  styleUrls: ['./poke-dialog.component.scss']
})
export class PokeDialogComponent implements AfterViewInit {

  @ViewChild('dialogContent', {read: ViewContainerRef }) 
  private dialogContent!:ViewContainerRef;

  
  public element: Type<unknown>;
  public title: string;
  public dialogType: 'dialog'|'confirm';
  public options: Object;
  public close: {
    text:string,
    visible:boolean;
  }
  public onClose$ = new Subject<void>();
  public onClick$ = new Subject<any>();

  private cdref: ChangeDetectorRef = inject(ChangeDetectorRef);
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      const _element = this.dialogContent.createComponent(this.element) as any;
      _element.instance.onClick$ = this.onClick$;
      if (this.options) {
        _element.instance.data = this.options
      }
      this.cdref.detectChanges();
    });
  }
}