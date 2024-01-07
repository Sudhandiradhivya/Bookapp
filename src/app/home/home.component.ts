import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../apitest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private apiTest:ApitestService,private router: Router){}
ngOnInit(){
  this.getImages();
}
Image:any;
getImages(){
  this.apiTest.getBooks().subscribe(data=>{
      this.Image=data
  })

}
viewDetails(imageId: number): void {
  this.router.navigate(['/Details', imageId]); // Navigate to Details page with ID
}
}
