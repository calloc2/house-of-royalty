import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-contact',
  imports: [MatCard,
    MatIcon,
    MatDivider,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
