import { ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';
import { DialogBoxButton } from '../models/dialog-box-button';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private viewContainerRef!: ViewContainerRef;

  public setContainerRef(containerRef: ViewContainerRef) {
    this.viewContainerRef = containerRef;
  }


  private createComponent<T>(componentType: Type<T>): ComponentRef<T> {
    return this.viewContainerRef.createComponent(componentType);
  }


  public async openDialogBox(title: string, message: string, buttons?: Array<DialogBoxButton>): Promise<void> {
    const { DialogBoxComponent } = await import('../components/dialog-box/dialog-box.component');
    const dialogBoxComponentRef: ComponentRef<DialogBoxComponent> = this.createComponent(DialogBoxComponent);
    const dialogBoxComponent = dialogBoxComponentRef.instance;

    dialogBoxComponent.set(dialogBoxComponentRef, title, message, buttons);
  }
}
