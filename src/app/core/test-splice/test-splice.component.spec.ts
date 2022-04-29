import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpliceComponent } from './test-splice.component';

describe('TestSpliceComponent', () => {
  let component: TestSpliceComponent;
  let fixture: ComponentFixture<TestSpliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSpliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
