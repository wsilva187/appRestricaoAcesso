import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  // ATRIBUTOS
  @Input('page-title') pageTitle: string;

  @Input('show-button') showButton: boolean = true;
  @Input('button-class') buttonClass: string;
  @Input('button-class-icon') buttonClassIcon: string;
  @Input('button-text') buttonText: string;
  @Input('button-link') buttonLink: string;

  @Input() items: Array<BreadCrumbItem> = [];


  // CONSTRUTOR
  constructor() { }

  
  // MÉTODOS PÚBLICOS
  ngOnInit() {
  }

  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 == this.items.length;
  }

}
