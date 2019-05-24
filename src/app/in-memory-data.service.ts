import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // serra exécuté lors du premier appel http
  createDb() {
    const students = [
      { 
        id: 1,
        nom: 'arnorld',
        prenom: 'Etwillie', 
        age: 34, 
        filiere: 'S', 
        nomDeClasse: 'Classe 1', 
        description: 'abruti' 
      },
      { 
        id: 2,
        nom: 'émile',
        prenom: 'Labille', 
        age: 16, 
        filiere: 'S', 
        nomDeClasse: 'Classe 1', 
        description: 'abruti' 
      },
      { 
        id: 3,
        nom: 'coquille',
        prenom: 'St Jacques', 
        age: 14, 
        filiere: 'S', 
        nomDeClasse: 'Classe 1', 
        description: 'abruti' 
      },
      { 
        id: 4,
        nom: 'louis',
        prenom: 'Futon', 
        age: 56, 
        filiere: 'S', 
        nomDeClasse: 'Classe 1', 
        description: 'abruti' 
      },
    ];
  return {students};
  }

  genId(students: Student[]): number {
    return (students.length > 0) ? Math.max(...students.map(student => student.id)) + 1 : 11
  }
}