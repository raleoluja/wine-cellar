import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../model/wine.model';


@Component({
  selector: 'wc-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  @Input() private wines: Wine[];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
