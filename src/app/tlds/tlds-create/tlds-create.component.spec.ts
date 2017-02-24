import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TldsCreateComponent } from './tlds-create.component'
import { CUSTOM_ELEMENTS_SCHEMA, FormsModule } from '@angular/core';
import {} from 'jasmine';

describe('SearchBarComponent', () => {
  let component: TldsCreateComponent;
  let fixture: ComponentFixture<TldsCreateComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: mockRouter }],
      declarations: [ TldsCreateComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TldsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should navigate to /tlds on onCancel', () => {
    component.onCancel();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
