/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';

import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';
import { Coffee } from '../coffee';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;
  let coffeeService: CoffeeService;
  let coffees: Array<Coffee> = [
    {
      id: faker.string.uuid(),
      nombre: faker.lorem.word(),
      tipo: 'Tipo 1',
      region: faker.location.city(),
      sabor: faker.lorem.word(),
      altura: faker.number.int(),
      imagen: faker.image.url(),
    },
    {
      id: faker.string.uuid(),
      nombre: faker.lorem.word(),
      tipo: 'Tipo 1',
      region: faker.location.city(),
      sabor: faker.lorem.word(),
      altura: faker.number.int(),
      imagen: faker.image.url(),
    },
    {
      id: faker.string.uuid(),
      nombre: faker.lorem.word(),
      tipo: 'Tipo 2',
      region: faker.location.city(),
      sabor: faker.lorem.word(),
      altura: faker.number.int(),
      imagen: faker.image.url(),
    },
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    coffeeService = TestBed.inject(CoffeeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show headers in table', () => {
    const headers = debug.query(By.css('.coffee-list__header'));
    const content: HTMLElement = headers.nativeElement;

    expect(content.childNodes[0].textContent).toBe('#');
    expect(content.childNodes[1].textContent).toBe('Nombre');
    expect(content.childNodes[2].textContent).toBe('Tipo');
    expect(content.childNodes[3].textContent).toBe('Región');
  });

  it('should show rows in table', fakeAsync(() => {
    spyOn(coffeeService, 'getCoffees').and.returnValue(of(coffees));

    component.ngOnInit();
    tick();
    fixture.detectChanges();

    const rows = debug.queryAll(By.css('.coffee-list__row'));

    expect(rows).toHaveSize(coffees.length);
  }));
});
