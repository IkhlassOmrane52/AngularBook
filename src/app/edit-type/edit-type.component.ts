import { Component, OnInit,Input } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Type} from '../shared/type';
@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {

  
  @Input()
  type!:Type;
     display!:boolean;
  id!:number;
  data:any;
  submitted!: boolean;

      constructor(private service: BookService) { }
  ngOnInit(){}
      edittypeInfo(type:Type){
        this.id=type.id;

        this.service.putType(this.id,type).subscribe(data=>{console.log(data)});
        this.display=false;
        
     }
  }
  


