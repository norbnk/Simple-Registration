import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
  });

  ngOnInit(): void {}

  saveForm() {
    if (!this.profileForm.valid) {
      alert('Please fill the form');
      return;
    }

    this.onAddUser.emit(this.profileForm.value);

    this.profileForm.reset();
  }
}
