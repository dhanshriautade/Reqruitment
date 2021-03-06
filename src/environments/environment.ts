// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const base_url = 'http://localhost:8081/';

export const environment = {
  production: false,
  Employeepost:base_url + 'addEmployee',
  UpdateEmployee:base_url + 'updateEmployee',
  DeleteEmployee:base_url + 'deleteEmployee',
  Employeeget:base_url + 'getAllEmployeesInfo',
  getAllJob:base_url + 'getalljobpostingdetails',
  signUp: base_url + 'signup',
  login:base_url + 'check/checkLogin',
  sendemail: base_url + 'sendemail',
  searchDepartmentWiseJob: base_url + 'searchDepartment?department',
  alreadyUser:base_url + 'verifyemail/eventhit',
  uploadresume:base_url + 'uploadDocuments',
  forgot: base_url + 'emailexists?email=',
  getprofile:base_url + 'getprofile',
  AddInfo:base_url + 'experienceprofile',
  CreateJob: base_url + 'addjobcreation',
  GetAlljob: base_url + 'getalljobpostingdetails',
  getnotification:'http://localhost:8082/getAllNotification'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
