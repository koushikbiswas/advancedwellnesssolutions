import { Component, OnInit, HostListener, TemplateRef } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {Router, ActivatedRoute} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  windowScrolled: boolean;
  public myform: FormGroup;
  public formSubmited: boolean = false;
  public successmodal: any = false;
  public stateslist: any;
  public ready: any;
  public imgval:any;
  public imagemodal:any = 1;


  // public api_url:any = environment['api_url'];
  public api_url:any = 'https://api.influxhostserver.com/';

  constructor(public router: Router, public activatedroute: ActivatedRoute, private readonly meta: MetaService, public fb: FormBuilder, public http: HttpClient, private modalService: BsModalService , public cookieservice:CookieService) { 
   
    
    this.getState();
    if(this.cookieservice.check('jwttoken') == false){
      console.log(this.cookieservice.check('jwttoken'));
      this.setTempToken();
    }
    let product:any = ['5d7f16463bd1bb6d1d19359b'];
    this.myform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phoneno: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
      mobile: [''],
      address: ['', Validators.required],
      website: [''],
      state: ['', Validators.required],
      created_by: this.activatedroute.snapshot.params.repid,
      signup:1,
      product: [product]
    })
  }
  setTempToken() {
    const link = this.api_url + 'temptoken';
    this.http.post(link, { }).subscribe(res => {
        let result:any = res;
        this.cookieservice.set('jwttoken', result.token);
        
    });

    
  }


  scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  toTop() {
    document.getElementById("nmsfunneldoctor_formblock").scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit() {
    this.router.events.subscribe(() =>
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          })
      );

    this.meta.setTitle('Advanced Wellness Solutions ');
    this.meta.setTag('og:description', ' ');
    this.meta.setTag('og:title', 'Advanced Wellness Solutions ');
    this.meta.setTag('og:type', 'www.advancewellnesssolutions.com/');
    this.meta.setTag('og:image', 'https://www.advancewellnesssolutions.com/assets/images/logo.png');
    
  }

  getState() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    var result = this.http.get('assets/data/state.json').subscribe(res => {
      this.stateslist = res;
      // console.log('stateslist');
      // console.log(this.stateslist);
  
    });
    return result;
  }
  

  doSubmit(template: TemplateRef<any>){

    this.formSubmited = true;
    //console.log(this.myform.value);
    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if (this.myform.valid) {
      var link = this.api_url+'addorupdatedata';
      var data: any = {
        "source": "leads",
        "data": this.myform.value,
        "sourceobj":["created_by"]
      };
      // this.successmodal = true;
      this.http.post(link, data)
          .subscribe(res => {
  
            let result: any = {};
            result = res;
            console.log(result);
            if (result.status == 'success') {
  
              this.modalRef = this.modalService.show(template, {class: 'modal-md submitpopup'});
              this.myform.reset();

              setTimeout(()=>{
              
                // this.successmodal = true;
                // console.log(this.successmodal)
                this.modalRef.hide();
              },3000);
           }
         })
      }
  }
 


  
  closep(){
    this.modalRef.hide();
  }

  inputUntouch(form: any, val: any) {
    console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }

  
  openmodal(img:any,template:TemplateRef<any>){
    
    this.modalRef = this.modalService.show(template,{class: 'modal-lg submitpopup'});
    this.imgval = img;
  }

}
