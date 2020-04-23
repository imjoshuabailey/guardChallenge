import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id: string;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
