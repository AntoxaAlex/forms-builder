import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

import { UserState } from '../state/reducers/userReducer';
import { FormsBuilderService } from '../../forms-builder/services/forms-builder.service';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../state/selectors';
import { FormsBuilderContentState } from '../state/reducers';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public logout$: Observable<any>;
  public userState: UserState;
  @ViewChild('logoutBtn') public logoutBtn: MatButton;
  constructor(private fbs: FormsBuilderService, private store$: Store<FormsBuilderContentState>) {}

  ngOnInit() {
    this.store$.pipe(select(selectUser)).subscribe((state: UserState) => {
      this.userState = state;
    });
  }

  ngAfterViewInit() {
    this.logout$ = fromEvent(this.logoutBtn._elementRef.nativeElement, 'click');
    this.logout$.subscribe(() => {
      this.fbs.logout();
    });
  }
}
