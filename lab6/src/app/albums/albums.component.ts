import { Component, OnInit } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: any=[]
  constructor(private router: Router,
              private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.albums = this.albumService.albums
  }

  goToPage(id: number) {
    this.router.navigate([`albums/${id}`])
  }

  removeAlbum(i: number) {
    this.albums.splice(i, 1)
    this.albumService.albums = this.albums
  }
}
