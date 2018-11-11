import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form;
  constructor() {}

  ngOnInit() {}

  submitForm(f) {
    // 可以用 ViewChild 直接抓但不建議
    // console.log(this.form);

    // 建議抓傳入的
    console.log(f);
  }
}
