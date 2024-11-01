import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Array<Coffee> = [];
  coffeeTypes: Array<{type: string; total: number}> = [];

  constructor(
    private coffeeService: CoffeeService,
  ) { }

  ngOnInit() {
    this.getCoffees();
  }

  calculateCoffeeTypes (coffees: Array<Coffee>) {
    for (const coffee of coffees) {
      const coffeeTypeIndex = this.coffeeTypes.findIndex(coffeeType => coffeeType.type === coffee.tipo.toLowerCase());

      if (coffeeTypeIndex >= 0) {
        this.coffeeTypes[coffeeTypeIndex].total += 1;
      } else {
        this.coffeeTypes.push({ type: coffee.tipo.toLowerCase(), total: 1 });
      }
    }
  }

  getCoffees() :void {
    this.coffeeService
      .getCoffees()
      .subscribe(coffees => {
        this.coffees = coffees;
        this.calculateCoffeeTypes(coffees);
      });
  }
}
