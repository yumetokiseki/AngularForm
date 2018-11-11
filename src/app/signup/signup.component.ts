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
  areas;

  zipcode;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('/assets/data/cityarea.json').subscribe(data => {
      this.cityTownAreaSource = data;
      this.citys = Object.keys(this.cityTownAreaSource);

      // console.log(data);
      // console.log(this.citys);
    });
  }

  getZipCode(town) {
    console.log(town);
    console.log(town[1]);
    this.zipcode = town[1];
  }

  // 方法一
  // changeCity(event) {
  //   this.areas = this.cityTownAreaSource[event.target.value];
  //   console.log(this.areas);
  // }

  // 方法二
  // changeCity(city) {
  //   this.areas = this.cityTownAreaSource[city];
  //   console.log(this.areas);
  // }

  // 方法三
  changeCity(city) {
    this.areas = Object.entries(this.cityTownAreaSource[city]);
    console.log(this.areas);
  }

  submitForm(f) {
    // 可以用 ViewChild 直接抓但不建議
    // console.log(this.form);

    // 建議抓傳入的
    console.log(f);
  }
}
