import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensDestaqueComponent } from './itens-destaque.component';

describe('ItensDestaqueComponent', () => {
  let component: ItensDestaqueComponent;
  let fixture: ComponentFixture<ItensDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
