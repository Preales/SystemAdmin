import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
  providers: [EmployeeService]
})
export class ShowEmployeeComponent implements OnInit {

  public EmployeeList: Employee[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _employeeService: EmployeeService,
  ) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this._router.navigate(['/user']);
      return;
    }
    this._employeeService.getAll().subscribe(
      resp => {
        if (resp.response == "OK")
          this.EmployeeList = resp.data;
        else
          swal("Error", resp.message, "error");

      },
      error => {
        swal("Error", "Error al obtener los datos", "error");
      }
    );
  }

  addClick() {

  }

  editClick(){
    
  }

}
