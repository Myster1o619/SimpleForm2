import { Component, OnInit } from '@angular/core';
import {  } from '@angular/forms';

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

  ngOnInit() {
    
  }
}
