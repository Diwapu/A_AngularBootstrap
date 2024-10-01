import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nama = 'Diky Wajdi Putra Khairullah';
  nim = '202102347';
  title = 'Angular Bootstrap';
}
