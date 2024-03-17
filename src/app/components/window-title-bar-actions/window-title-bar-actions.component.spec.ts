import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowTitleBarActionsComponent } from './window-title-bar-actions.component';

describe('WindowTitleBarActionsComponent', () => {
  let component: WindowTitleBarActionsComponent;
  let fixture: ComponentFixture<WindowTitleBarActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowTitleBarActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowTitleBarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
