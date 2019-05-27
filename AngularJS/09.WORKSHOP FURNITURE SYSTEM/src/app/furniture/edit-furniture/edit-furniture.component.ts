import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from '../../models/furniture';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  form: FormGroup;
  furniture: Furniture;
  constructor(
    private fb: FormBuilder,
    private furnitureService: FurnitureService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];

      this.furnitureService.getFurniture(id).subscribe(f => {
        this.furniture = f;
         //console.log(this.furniture);
        this.form = this.fb.group({
          make: [this.furniture.make, [Validators.required, Validators.minLength(4)]],
          model: [this.furniture.model, [Validators.required, Validators.minLength(4)]],
          year: [this.furniture.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
          description: [this.furniture.description, [Validators.required, Validators.minLength(10)]],
          price: [this.furniture.price, [Validators.required, Validators.min(0)]],
          image: [this.furniture.image, Validators.required],
          material: [this.furniture.material, Validators.nullValidator]
        });
      })
    })
  }



  edit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      const body = this.form.value;
      this.furnitureService.editFurniture(body, id).subscribe(data => {
        this.router.navigate(['/furniture/all'])
      })
    })
  }

  get f() {
    return this.form.controls;
  }
}
