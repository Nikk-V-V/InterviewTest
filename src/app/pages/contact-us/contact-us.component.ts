import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      fullname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required, 
        Validators.email,
        Validators.pattern(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i)
        ]),
      phoneNumber: new FormControl('+380', [
        Validators.required,
        Validators.minLength(13),
        Validators.pattern(
          /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/
        )
      ])
    });
  }

  onSubmit(): void {
    console.log(this.phoneNumber.errors);
  }

  get fullname() {
    return this.form.get('fullname');
  }

  get email() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
}
