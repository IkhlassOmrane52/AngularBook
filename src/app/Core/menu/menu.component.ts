import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor(private router: Router) { }


    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Dashbord',
                icon:'pi pi-home',
                routerLink: [
    
                    '/home'
    
                ]
            },
                {
                    label: 'Book Crud',
                    icon: 'pi pi-book',
                    routerLink: [
    
                        '/book'
    
                    ]
                },
                {
                    label: 'Type Crud',
                    icon: 'pi pi-star',
                    routerLink: [
    
                        '/type' ]
                },
                {
                    label: 'Type Crud',
                    icon: 'pi pi-plus',
                    routerLink: [
    
                        '/type' ]
                }, {
            label: 'Dashbord',
            icon:'pi pi-home',
            routerLink: [

                '/home'

            ]
        },
            {
                label: 'Book Crud',
                icon: 'pi pi-book',
                routerLink: [

                    '/book'

                ]
            },
            {
                label: 'Type Crud',
                icon: 'pi pi-plus',
                routerLink: [

                    '/type' ]
            },
            {
                label: 'Type Crud',
                icon: 'pi pi-plus',
                routerLink: [

                    '/type' ]
            },
            {
                label: 'Type Crud',
                icon: 'pi pi-plus',
                routerLink: [

                    '/type' ]
            },
            {
                label: 'Type Crud',
                icon: 'pi pi-plus',
                routerLink: [

                    '/type' ]
            },
            {
                label: 'Type Crud',
                icon: 'pi pi-plus',
                routerLink: [

                    '/type' ]
            },

        ];
    }
}


