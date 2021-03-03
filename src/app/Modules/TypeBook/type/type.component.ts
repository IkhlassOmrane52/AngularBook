import { Component, OnInit } from '@angular/core';
import { Type } from '../../../shared/Class/type/type';
import { BookService } from '../../../shared/Services/book.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class TypeComponent implements OnInit {
  typeDialog!: boolean;
  typeaddDialog!: boolean;

  types!: any;

  type!: Type;

  selectedType!: Type[];
  Type: Type = {
    id: null,
    name: null,
    details: null,

  };
  val:any;
  submitted!: boolean;
  constructor(private Service: BookService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
   
    this.Service.getType().subscribe(res => { this.types = res });
  }
  openNew() {
    this.type = this.type;
    this.submitted = false;
    this.typeaddDialog = true;
}
deleteSelectedProducts() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.types = this.types.filter((val: Type) => !this.selectedType.includes(val));
         //this.selectedType = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'typesDeleted', life: 3000});
      }
  });
}

editType(type: Type) {
  this.type = {...type};
  this.typeDialog = true;
}
insertType() {
  console.log(this.Type);

  this.Service.insertType(this.Type).subscribe(res => { this.ngOnInit() }, error => { console.log(error) });
  this.typeaddDialog = false;
  this.messageService.add({severity:'success', summary: 'Successful', detail: 'type book created', life: 3000});

}

deleteType(type: Type) {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + type.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.types = this.types.filter((val: { id: any; }) => {val.id !== type.id});
          this.type = {...type};
          this.Service.deleteType(type.id).subscribe(res => { this.ngOnInit() });

          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Type Deleted', life: 3000});
      }
  });
}

hideDialog() {
  this.typeDialog = false;
  this.submitted = false;
}

saveType() {
  this.submitted = true;

  if (this.type.name.trim()) {
      if (this.type.id) {
          console.log('hii')
          this.Service.putType(this.type.id,this.type).subscribe(res => { this.ngOnInit() }, error => { console.log(error) });
       
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Type Updated', life: 3000});
      }
      

      this.types = [...this.types];
      this.typeDialog = false;
      this.type = {...this.type};
  }
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.types.length; i++) {
      if (this.types[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}


}

  


