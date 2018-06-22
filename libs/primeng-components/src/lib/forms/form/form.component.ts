import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

class User {
  firstName: string;
  secondName: string;
  nickName: string;
  title: string;
  role: string;
  skills: string[];
  knownLanguages: any;
}

@Component({
  selector: 'primeng-material-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  titles: SelectItem[] = [
    { label: 'Mr', value: 'mr' },
    { label: 'Mrs', value: 'mrs' },
    { label: 'Ms', value: 'ms' }
  ];
  roles: string[] = [];
  user: User = new User();

  constructor(private messageService: MessageService) {
    this.user.knownLanguages = [
      {
        key: 'English',
        value: 'good'
      }
    ];
  }

  ngOnInit() {}

  onSubmit(userform) {
    console.log(userform.form.value);
    this.messageService.add({
      severity: 'info',
      summary: 'User saved',
      detail: 'Check the console to see the saved user!'
    });
  }

  searchRoles(event) {
    setTimeout(() => {
      this.roles = [
        'Operations manager',
        'Office manager',
        'Receptionist',
        'Marketing manager',
        'Quality control, safety, environmental manage',
        'Systems analyst',
        'Software engineer',
        'Technical support'
      ];
    }, 500);
  }
}
