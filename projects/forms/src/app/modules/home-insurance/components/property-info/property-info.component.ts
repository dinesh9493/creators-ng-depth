import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.scss'],
})
export class PropertyInfoComponent implements OnInit {
  public multiOwnerGroup: FormGroup = new FormGroup({});

  get getPropertyFormArray() {
    return this.multiOwnerGroup.get('propertyList') as FormArray;
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initiateMultiOwnerProperty();
  }

  private _initiateMultiOwnerProperty() {
    this.multiOwnerGroup = this._formBuilder.group({
      owner1Name: [''],
      owner2Name: [''],
      propertyList: this._formBuilder.array([]),
    });
  }

  private _initiatePropertyForm() {
    return this._formBuilder.group({
      propertyName: [''],
      propertyAreainSqFeet: [0],
      propertyValue: [0],
      propertyRegistrationNumber: [''],
    });
  }

  public submitPropertyForm() {
    console.log(this.multiOwnerGroup);
  }

  public addNewPropertyDetails() {
    let tempForm = this._initiatePropertyForm();
    let formArray = this.multiOwnerGroup.get('propertyList') as FormArray;
    formArray.push(tempForm);
  }
}
