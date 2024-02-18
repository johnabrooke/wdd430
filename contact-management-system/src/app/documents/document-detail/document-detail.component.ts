import { Component } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document/document.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent {
 document: Document;
 id: string;

 constructor(private documentService: DocumentService,
            private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.document = this.documentService.getDocument(this.id);
      }
    )
  }
}
