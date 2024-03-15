import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  private documents: Document[] = [];
  private maxDocumentId: number;
  private documentListClone: Document[] = [];

  constructor(private http: HttpClient) {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.http.get<Document[]>('https://contact-management-system-430-default-rtdb.firebaseio.com/documents')
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
          this.maxDocumentId = this.getMaxId();
          //sort the list of documents
          this.documents.sort((a, b) => {
            // a.name.localeCompare(b.name)
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            if (aName < bName) {
              return -1;
            }
            if (aName > bName) {
              return 1;
            }

            return 0;
          });
          //emit the next document list change event
          this.documentChangedEvent.next(this.documents.slice());
        },
        (error:any) => {
          console.log(error);
        }
      )
  }

  getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id == id) {
        return document;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId: number = 0;

    for (const document of this.documents) {
      const currentId = +document.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(this.documentListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    this.documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(this.documentListClone);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.documentListClone = this.documents.slice();
    this.documentListChangedEvent.next(this.documentListClone);
  }
}
