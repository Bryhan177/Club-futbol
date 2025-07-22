import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css'],
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group(
      {
        
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsIgualesValidator() }
    );
  }

  // Validador personalizado
  passwordsIgualesValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmar = group.get('confirmarPassword')?.value;
      return password === confirmar ? null : { passwordsMismatch: true };
    };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario enviado:', this.registroForm.value);
      alert('Registro exitoso');
      this.registroForm.reset();
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
  loregister() {
    this.router.navigate(['/login']);
    console.log('Ir a login');
    // Aquí puedes agregar la lógica para redirigir al usuario a la página de inicio de sesión
}

}
