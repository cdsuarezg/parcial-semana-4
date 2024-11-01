import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffe';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Array<Coffee> = [];

  constructor(
    private coffeeService: CoffeeService,
  ) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() :void {
    this.coffeeService
      .getCoffees()
      .subscribe(coffees => {
        this.coffees = coffees
      });
  }
}
