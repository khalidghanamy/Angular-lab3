import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpliceArrayComponent } from './test-splice-array.component';

describe('TestSpliceArrayComponent', () => {
  let component: TestSpliceArrayComponent;
  let fixture: ComponentFixture<TestSpliceArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSpliceArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpliceArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
