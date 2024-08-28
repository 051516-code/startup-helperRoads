import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
})
export class CompanyProfilePage implements OnInit {
  ratings = {
    comments: 3,
    experience: 4,
    reputation: 2,
    frequency: 3
  };

  labels = {
    comments: 'Medio',
    experience: 'Profesional',
    reputation: 'Normal',
    frequency: 'Media'
  };

  comments = [
    {
      photo: 'assets/images/user1.jpg',
      name: 'Juan Pérez',
      stars: 4,
      description: 'Excelente servicio, muy profesional y rápido.'
    },
    {
      photo: 'assets/images/user2.jpg',
      name: 'Ana García',
      stars: 5,
      description: 'Muy satisfecha con la experiencia. Totalmente recomendada.'
    },
    {
      photo: 'assets/images/user3.jpg',
      name: 'Luis Martínez',
      stars: 3,
      description: 'Servicio bueno, pero podría mejorar en algunos aspectos.'
    }
  ];

  commentStats = {
    totalComments: 15,
    averageRating: 4
  };
  constructor() { }

  ngOnInit() {
  }

}
