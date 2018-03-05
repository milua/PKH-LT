import {Component, EventEmitter} from '@angular/core';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {PkhMaterial} from '../../formulardaten/pkh-material';
import {FormularService} from '../../rest-api/formular-service';

@Component({
  selector: 'app-endfenster',
  templateUrl: './endfenster.component.html',
  styleUrls: ['./endfenster.component.css']
})
export class EndfensterComponent implements IFormComponentBase {

  constructor(private formularService: FormularService,public pkhForm: PkhMaterial) {
  }

  getUntertitel(): string {
    return 'Generieren des PDFs';
  }

  public sendFormularToServer(){
    // TODO generate download link
    this.formularService.sendeFormularAnServer(this.pkhForm);
  }
}