import { Component } from '@angular/core';
import { ObreroService } from '../services/obrero'
import { Obrero } from '../models/obrero'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-obrero',
  templateUrl: './obreroformulario.html',
  styleUrl: './obrero.css',

  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ObreroFormularioComponent),
      multi: true,
    },
  ],
})

export class ObreroFormularioComponent {

  obreroActual: Omit<Obrero, 'id'> = { nombre: '', apellido: '', area: 0 };

  editando: boolean = false;
  yaSeHizoSubmit = false;

  constructor(
    private fb: FormBuilder,
    private obreroService: ObreroService,
    private route: ActivatedRoute
  ) {

  }
  obreroForm!: FormGroup;


  ngOnInit(): void {

    this.obreroForm = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      area: new FormControl(0)
    });

    const idActual = this.route.snapshot.params['id']

    if (idActual !== "0") {
      this.editando = true;
      this.loadIndividualObrero(idActual);
    }

  }

  async onSubmit() {

    
    console.log("entrooo")

    console.log(this.obreroForm.value)

      if (this.obreroForm.invalid) {
        this.obreroForm.markAllAsTouched();
        this.yaSeHizoSubmit=true;
        return; 
      }


    if (this.editando){
      this.updateObrero();
    }
    else{
      this.addObrero();
    }
     window.location.href = "http://localhost:4200"

  }


  async loadIndividualObrero(id: string) {
    try {

      const res = await firstValueFrom(this.obreroService.getOneObrero(Number(id)));
      this.obreroForm.setValue(res);
    }
    catch (e) {
      console.log(e)
    }
  }


  async addObrero() {
    try {
      console.log("a")
      await firstValueFrom(this.obreroService.addObrero(this.obreroForm.value))
          console.log("b")
    }
    catch (e) {
      console.log(e)
    }
  }

  async updateObrero() {
    try {
      await firstValueFrom(this.obreroService.updateObrero(this.obreroForm.value));
    }
    catch (e) {
      console.log(e)
    }
  }

}
