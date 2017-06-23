import { Component } from '@angular/core';
import {ItemDataService} from './item/item-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'my test app';
  private titleClass:boolean = true;
 // ensure Object property names are in single quote
  private titleClasses: Object = {
      'title-h4': true,
      'title-large-h4': true
  }

  private titleStyles: Object = {
    'background' : 'red'
  }

  private _age: number = 0;
  private isTrue: boolean = true;
  private obj = {
    name: 'Chakra', age: 32
  }

  private newItem: string = "Enter an item";
  private items: Array<string> = ["Item1","Item2"];
  private numbersArray: Array<number> = [1,2,10,6,4,8];
  // even though declared as private, they are still visible in the template!
  private words: Array<string> = [];

  constructor(private itemDataService: ItemDataService) {
     // assigning this.words to getter method, notice there is no use of parens this.itemDataService.words
     // Also note private methods and instance variables are not visible in AppComponent
     this.words = this.itemDataService.words;
  }

   public ngOnInit() : void {
     console.log("AppComponent ngOnInit");
   }
  private  pushItem(newItem: string): void {
    if (this.newItem != "") this.items.push(newItem);
  }

  private  removeItem(ind: number): void {
    this.items.splice(ind, 1);
  }

  get age() : number {
    console.log("this.obj.age:"+this.obj.age);
    return this.obj.age;
  }

  set age(value :number) {
    this.obj.age = value;
  }

  getMyAge(){
    return this.obj.age;
  }
  setMyAge(value :number){
     this.obj.age = value;
  }
}
