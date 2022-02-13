import { ProfileService } from '../profile-service.service';
import { Repo } from './../repo';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profileComponent implements OnInit {
  profile!: Profile;
  repo!: any;
  repoRequest: any;
  constructor( private profileRequest:ProfileService) {
    this.repo= new Repo("","","","")
    this.profile=new Profile("","","",0,0,0)
  }
  search(searchItem:any) {
    this.profileRequest.getUserProfile(searchItem).then((_success)=>{
      this.profile = this.profileRequest.profile
      console.log(this.profile)
    },
         (_error)=>{
          console.log("error");
       }
       )
      //  this.search('searchRepo') 
      //   this.repoRequest.getUserRepo(searchItem).then((_success:any)=>{
      //     this.repo = this.repoRequest.profile
      //     console.log(this.repo)
      //   },
      //        (error:any)=>{
      //         console.log("error");
      //      }
      //      )





      }
    ngOnInit(): void {
      this.search('ruthjelimo')
    }
  }
function ngOnInit() {
  throw new Error('Function not implemented.');
}
