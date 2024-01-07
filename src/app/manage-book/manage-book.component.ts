import { Component, OnInit } from '@angular/core';
import { ApitestService } from '../apitest.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {
  constructor(private service:ApitestService,private activatedRoute:ActivatedRoute,private http:HttpClient){}
  Image:any;
Model:any;
id:any;

ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log('this.id:', this.id);

  this.service.getBooks().subscribe(data => {
    this.Image = data.filter((img: any) => img.id === parseInt(this.id, 10));
    console.log('this.Image:', this.Image);
  });
}
onSubmit(updatedBook: any) {
  const id = updatedBook.id; // Assuming 'id' is a property in the 'updatedBook' object
  console.log('Updated Book:', updatedBook);

  this.http.put(`http://localhost:3000/books/${id}`, updatedBook).subscribe(
 
  );
}
}
