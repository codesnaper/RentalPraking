import { Component, OnInit, Input } from '@angular/core';
import { Header } from 'src/app/modal/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input("header") header: Header;
  constructor() { }

  ngOnInit() {}

}
