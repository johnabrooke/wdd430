import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  selectedDocument: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.documentSelectedEvent.subscribe((document: Document) => {
      this.selectedDocument = document;
    });
  }
}
