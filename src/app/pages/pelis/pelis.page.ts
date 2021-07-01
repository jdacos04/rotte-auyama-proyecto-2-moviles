import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {PeliService} from '../../services/peli.service'
import {IPelis} from '../../model/IPelis.intefaces'
@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  results: Observable<IPelis>;
  term: string='';
  type: string='';
  constructor(private peliService: PeliService) { }

  ngOnInit() {
    
  }

  searchChanged():void{  
    this.results = this.peliService.getPelis(this.term, this.type)         
  }

}
