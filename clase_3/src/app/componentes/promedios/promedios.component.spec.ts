import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromediosComponent } from './promedios.component';

describe('PromediosComponent', () => {
  let component: PromediosComponent;
  let fixture: ComponentFixture<PromediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromediosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
