import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PswdForgetPage } from './pswd-forget.page';

describe('PswdForgetPage', () => {
  let component: PswdForgetPage;
  let fixture: ComponentFixture<PswdForgetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PswdForgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
