import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  students: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/students').valueChanges()
      .subscribe((students) => {
        this.students = students;
      });
  }

}
