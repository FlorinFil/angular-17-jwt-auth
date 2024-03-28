import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
}


const imgList = ["src/assets/photos/2D6FA242-0FFC-4C40-8F0C-8347B9D8792E.jpeg",
"src/assets/photos/9B1E6CE8-8510-46D1-BEE5-235A0D66421B.jpeg",
"src/assets/photos/14A31D2F-4F68-4860-BE68-F7ABC53D1B3F.jpeg",
"src/assets/photos/731BB232-058E-4D23-8CB2-BDEF287033CA.jpeg",
"src/assets/photos/33616E95-BBD3-447E-8E62-71CCEDA7B233.jpeg",
"src/assets/photos/2728931C-9455-4D52-9C90-80E1159C0324.jpeg",
"src/assets/photos/D7A8AA99-8C29-41D2-8D3F-9ACA683ECCF7.jpeg",
"src/assets/photos/F05C26A8-252C-4184-8576-918D5AE44E7F.jpeg",
"src/assets/photos/F31A72A1-E910-4A39-9026-C3FA6FBD1C91.jpeg",]
