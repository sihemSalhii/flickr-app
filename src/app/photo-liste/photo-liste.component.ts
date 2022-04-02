import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-photo-liste',
  templateUrl: './photo-liste.component.html',
  styleUrls: ['./photo-liste.component.css']
})
export class PhotoListeComponent implements OnInit {
  datasource: any;
  form: FormGroup;
  closeResult = '';
  datasourceItem: any;



  constructor(private appService: AppService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private router: Router) {

    this.form = this.formBuilder.group({
      text: ''
    });

  }

  open(content: any, item: any) {
    console.log(item);
    this.getInfo(item);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    }, (reason) => {

    });
  }

  search() {
    const search = this.form.get('text')?.value;
    this.appService.search(search).subscribe((value: any) => {
      this.datasource = value;
    });
  }

  ngOnInit(): void {
  }

  getImageUrl(photo: any) {
    //  https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  }

  next() {

    const search = this.form.get('text')?.value;
    this.appService.search(search, this.datasource.photos.page + 1, this.datasource.photos.per_page).subscribe((value: any) => {
      this.datasource = value;
    });
  }

  onScroll() {
    this.next();
  }

  onScrollUp() {
    this.next();
  }

  previous(){
    const search = this.form.get('text')?.value;
    this.appService.search(search, this.datasource.photos.page - 1, this.datasource.photos.per_page).subscribe((value: any) => {
      this.datasource = value;
    });
    
  }

  getInfo(photoId: string): void {
    if (photoId) {
      this.appService.getInfo(photoId).subscribe(value => {
        this.datasourceItem = value;
      });
    }
  }



}
