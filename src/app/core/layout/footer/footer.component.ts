import { Component } from '@angular/core';

@Component({
  selector: 'ngsocial-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
