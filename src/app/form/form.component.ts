import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Output, EventEmitter} from'@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchItem?: string
  @Output() searchProf = new EventEmitter<any>();

  searchUser() {
    this.searchProf.emit(this.searchItem)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
