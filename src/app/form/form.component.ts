import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Output, EventEmitter} from'@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './formComponent.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchItem?: string
  @Output() searchProfile = new EventEmitter<any>();

  searchUser() {
    this.searchProfile.emit(this.searchItem)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
