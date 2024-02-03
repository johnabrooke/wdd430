import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter();

  documents = [
    new Document('1', 'Brot', 'mein Brot', 'Brot.pdf'),
    new Document('2', 'Wasser', 'meine Wasser', 'Wasser.pdf'),
    new Document('3', 'Vater', 'mein Vater', 'Vater.pdf'),
    new Document('4', 'Frau', 'meine Frau', 'Frau.pdf'),
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
} 
