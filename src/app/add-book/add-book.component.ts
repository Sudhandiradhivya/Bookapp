import { Component, ViewChild } from '@angular/core';
import { ApitestService } from '../apitest.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @ViewChild('bookForm') bookForm!: NgForm;
   constructor(private service:ApitestService,private http:HttpClient){}

  onBook(books:{bookNmae:string,imageUrl:string,About:string,price:string,By:string,Publisher:string,Released:string}){
    console.log(books);
    this.http.post(' http://localhost:3000/books',books).subscribe((data)=>{
      console.log(data);
      this.bookForm.resetForm();
    })
  }
}
