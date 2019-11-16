import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalChatPage } from './signal-chat.page';

describe('SignalChatPage', () => {
  let component: SignalChatPage;
  let fixture: ComponentFixture<SignalChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
