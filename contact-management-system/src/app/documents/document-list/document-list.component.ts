import { Component, OnDestroy, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit():void {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent.subscribe((documentList: Document[]) => {
      this.documents = documentList;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
} 
