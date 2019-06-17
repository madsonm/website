import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-legendary',
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.scss']
})
export class LegendaryComponent implements OnInit {
  keywords: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/legendary/keywords.json').subscribe((data: any[]) => {
      this.keywords = [...data].map(rec => {
        let text = `${rec.text}`;

        // Keyword text
        const kw = rec.keyword.replace(/\s*\(.+\)/gi, '');
        text = text
          .replace(new RegExp(`"(${kw})"`, 'gi'), '$1')
          .replace(new RegExp(`\\b(${kw})\\b`, 'gi'), '<b>$1</b>');

        // Lists
        text = text.replace(/^\*\s*([^\n]*)/g, '<li>$1</li>');
        text = text.replace(/\n\*\s*([^\n]*)/g, '<li>$1</li>');
        text = text.replace(/(<li>.+<\/li>)/g, '<ul>$1</ul>');

        // Carriage returns
        text = text.replace(/\n/g, '<br />');

        // Action Icons
        text = text.replace(/\[(attack|recruit)\]/gi, (match, sub) => {
          return `${sub} <img src="assets/legendary/icon/action-${sub.toLowerCase()}.jpg" />`;
        });

        // Skill Icons
        text = text.replace(
          /\[(covert|instinct|ranged|strength|tech)\]/gi,
          (match, sub) => {
            return `<img src="assets/legendary/icon/skill-${sub.toLowerCase()}.png" />`;
          }
        );

        rec.text = text;
        return rec;
      });
    });
  }
}
