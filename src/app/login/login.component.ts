import { Component, OnInit } from '@angular/core';
import { BasicAuth } from '../menu-services/shared/models'
import { Router } from '@angular/router';
import { OpenShiftService } from '../menu-services/shared/openshift.service';
import { NgForage } from 'ngforage';

@Component({
  selector: 'dsf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = false;

  basicAuth: BasicAuth = {
    username: '',
    password: ''
  };

  constructor(
    private osservice: OpenShiftService,
    private router: Router,
    private storage: NgForage
  ) { }

  ngOnInit() {
    this.basicAuth.username = '';
    this.basicAuth.password = '';
  }

  doLoginToCluster() {
    
  }

}
