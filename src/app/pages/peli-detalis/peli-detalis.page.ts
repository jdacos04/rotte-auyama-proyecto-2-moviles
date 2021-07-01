import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {PeliService} from '../../services/peli.service'
import {IPelis} from '../../model/IPelis.intefaces'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-peli-detalis',
  templateUrl: './peli-detalis.page.html',
  styleUrls: ['./peli-detalis.page.scss'],
})
export class PeliDetalisPage implements OnInit {
  content: object = null;

  constructor(private peliService: PeliService, private activatedRpute : ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRpute.snapshot.paramMap.get('id');
    this.peliService.getDetails(id).subscribe(result =>{
      this.content =result;
    });
  }

}
