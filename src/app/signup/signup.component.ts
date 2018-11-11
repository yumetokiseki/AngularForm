import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // 可以直接抓表單內容(ViewChild)
  @ViewChild('f') form;
  cityTownAreaSource;

  citys;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('/assets/data/cityarea.json').subscribe(data => {
      this.cityTownAreaSource = data;
      this.citys = Object.keys(data);

      // console.log(data);
      console.log(this.citys);
    });
  }

  submitForm(f) {
    // 可以用 ViewChild 直接抓但不建議
    // console.log(this.form);

    // 建議抓傳入的
    console.log(f);
  }
}
