import {Component} from '@angular/core';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Abschnitt} from '../abschnitt';
import {NotizService} from './notiz-service';

@Component({
  selector: 'app-notiz',
  templateUrl: './notiz.component.html',
  styleUrls: ['./notiz.component.css']
})
export class NotizComponent {
  public notizIsActive: boolean;
  public localTextInput: string;

  constructor(private service: NotizService, private viewSwitchService: ViewSwitchService) {
    this.notizIsActive = false;
    this.localTextInput = this.activeNotizFeld;

    this.viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  public get notizButtonDisabled(): boolean {
    return this.service.notizButtonDisabled;
  }

  public get activeNotizFeld(): string {
    return this.service.activeNotiz;
  }

  public set activeNotizFeld(input: string) {
    this.service.activeNotiz = input;
  }

  public change() {
    this.activeNotizFeld = this.localTextInput;
  }

  public toggleNotiz() {
    this.notizIsActive = !this.notizIsActive;
  }

  private onFormChanged = (abschnitt: Abschnitt) => {
    this.localTextInput = this.activeNotizFeld;
  }

}
