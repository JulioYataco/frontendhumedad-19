// angular import
import { Component, inject, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import

// icon
import { IconService, IconDirective } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline
} from '@ant-design/icons-angular/icons';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthService } from 'src/app/core/services/login/auth.service';

@Component({
  selector: 'app-nav-right',
  imports: [IconDirective, RouterModule, NgScrollbarModule, NgbNavModule, NgbDropdownModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  private iconService = inject(IconService);

  styleSelectorToggle = input<boolean>();
  Customize = output();
  windowWidth: number;
  screenFull: boolean = true;

  constructor(public authService: AuthService) {

    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline
      ]
    );
  }

  //Agregamos el metoodo logout
  logout(): void{
    this.authService.logout();
  }

  // profile = [
  //   {
  //     icon: 'edit',
  //     title: 'Edit Profile'
  //   },
  //   {
  //     icon: 'user',
  //     title: 'View Profile'
  //   },
  //   {
  //     icon: 'profile',
  //     title: 'Social Profile'
  //   },
  //   {
  //     icon: 'wallet',
  //     title: 'Billing'
  //   }
  // ];

  // setting = [
  //   {
  //     icon: 'question-circle',
  //     title: 'Support'
  //   },
  //   {
  //     icon: 'user',
  //     title: 'Account Settings'
  //   },
  //   {
  //     icon: 'lock',
  //     title: 'Privacy Center'
  //   },
  //   {
  //     icon: 'comment',
  //     title: 'Feedback'
  //   },
  //   {
  //     icon: 'unordered-list',
  //     title: 'History'
  //   }
  // ];
}