import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [EmployeeService]
})
export class AddEditEmployeeComponent implements OnInit {

  @Input() model : Employee;

  public Employee: Employee;
  public isEdit: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService
  ) {
    this.Employee = new Employee('', '', '', '', '');
    this.isEdit = false;
  }

  ngOnInit(): void {
    this.getEmployee();

    if(this.model !== undefined){
      //funcion para matchear los campos del modelo en el formulario reactivo
      //this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }

  }

  addEmployee() {
    this._employeeService.post(this.Employee).subscribe(
      (resp: any) => {
        if (resp.response == "OK")
          this._router.navigate(['/employee']);
        else
          swal("Error", "Error al guardar los datos", "success");
      },
      error => {
        swal("Error", "Error Web Api", "error");
        console.log(error);
      }
    );
  }

  updateEmployee() {
    this._employeeService.put(this.Employee).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.response == "OK")
          this._router.navigate(['/employee']);
        else
          swal("Error", "Error al guardar los datos", "error");
      },
      error => {
        swal("Error", "Error Web Api", "error");
        console.log(error);
      }
    );
  }

  getEmployee() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      if (!id) { return; }
      this._employeeService.getById(id).subscribe(
        resp => {
          if (resp.response == "OK") {
            this.Employee = resp.data;
            this.isEdit = true;
          } else {
            swal("Error", "Error al obtener los datos del empleado " + resp.message, "error");
          }
        },
        error => {
          swal("Error", "Error Web Api", "error");
          console.log(error);
          this._router.navigate(['/employee']);
        }
      );
    });
  }
}
