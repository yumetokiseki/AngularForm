import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

function comfirm(group) {
  if (group.get('email').value !== group.get('confirmemail').value) {
    return { emailNotMatch: true };
  }
  return null;
}

@Component({
  selector: 'app-singup-advance',
  templateUrl: './singup-advance.component.html',
  styleUrls: ['./singup-advance.component.css']
})
export class SingupAdvanceComponent implements OnInit {
  // formData = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('table@senao.com.tw'),
  //   confirmemail: new FormControl({ value: '', disabled: true })
  // });

  constructor(private fb: FormBuilder) {}

  formData = this.fb.group({
    name: ['', [Validators.required]],
    emailGroup: this.fb.group(
      {
        email: '',
        confirmemail: [{ value: '', disabled: true }]
      },
      { validator: [comfirm] }
    )
  });

  ngOnInit() {
    // 表單初始可以這樣玩
    // this.http.get('productApi/1').subscribe(productInfo => {
    //   this.fb.group(productInfo);
    // });
  }
}
