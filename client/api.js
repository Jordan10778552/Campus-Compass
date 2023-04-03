import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export async function createProfile(first, last, id, pass) {
  const response = await axios.post(`${API_URL}/studentInfo/`, {
	"firstName": first,
	"lastName": last,
	"studentId": id,
	"password": pass
    });
  return response.data;
}

export async function attemptLogin(id, pass){
    const response = await axios.get(`${API_URL}/studentInfo/${id}/${pass}`);

    return response;
}
//example function should not be used
export function getStudents() {
  return axios.get(`${API_URL}/studentInfo`);
}
//example function should not be used
export function getStudentById(id) {
  return axios.get(`${API_URL}/studentInfo/${id}`);
}
//example function should not be used
export function updateStudent(id, firstName, lastName) {
  return axios.put(`${API_URL}/students/${id}`, { firstName, lastName });
}
//example function should not be used
export function deleteStudent(id) {
  return axios.delete(`${API_URL}/students/${id}`);
}
