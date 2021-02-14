import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public allContacts:any;
  public contactform = new FormGroup({
    first_name: new FormControl(''),
    last_name:new FormControl(''),
    phone:new FormControl('')
  })

  constructor(private service : ContactsService) { }

  ngOnInit(): void {
    this.getAllContact();
  }

  getAllContact() {
    this.service.getContacts().subscribe(data => {
      this.allContacts = data;
    })
  }
  onSubmit(){
    this.service.addContact(this.contactform.value).subscribe(data=>{
      console.log(data)
      alert("Contact is Added.");
      this.getAllContact();
      this.contactform.reset();
    })
  }
  DeleteContact(item:any) {

    this.service.deleteContact(item._id).subscribe(data => {
      console.log(data);
      this.getAllContact();
    })
  }

}
