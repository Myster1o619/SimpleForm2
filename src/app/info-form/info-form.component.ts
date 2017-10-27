import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  langs: string[] = [
    "English",
    "French",
    "German",
  ];

  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({ 
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl(),
    });
  }
}
