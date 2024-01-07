import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../apitest.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
constructor(private service:ApitestService,private activatedRoute:ActivatedRoute){}
Image:any;
Model:any;
id:any;
image:any;

ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('this.id:', this.id);

  this.service.getBooks().subscribe(data => {
    this.Image = data.filter((img: any) => img.id === parseInt(this.id, 10)); 
    console.log('this.Image:', this.Image);
  });
}



}
// this.id = this.activatedRoute.snapshot.paramMap.get('id');
//     console.log('Image ID:', this.id);
//     if (this.id) {
//       this.service.getImages().subscribe((data: any[]) => {
//         this.image = data.find(img => img.id == this.id);
//         console.log('Image :', this.image);
//       });
//     }
